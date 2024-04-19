import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useSelector } from 'react-redux';
import { jsPDF } from "jspdf";

function App() {
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const { currentUser } = useSelector(state => state.user);

  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setMessages([...messages, { text: currentQuestion, sender: 'user' }]);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      setMessages(prevMessages => [...prevMessages, { text: response["data"]["candidates"][0]["content"]["parts"][0]["text"], sender: 'bot' }]);
    } catch (error) {
      console.log(error);
      setMessages(prevMessages => [...prevMessages, { text: "Sorry - Something went wrong. Please try again!", sender: 'bot' }]);
    }

    setCurrentQuestion("");
    setGeneratingAnswer(false);
  }

  // Export chat function
  const exportChat = () => {
    const formattedChat = messages.map(message => `${message.sender}: ${message.text}`).join("\n");
    
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add formatted chat to the PDF
    doc.text(formattedChat, 10, 10);

    // Save the PDF
    doc.save("chat_export.pdf");
  };

  // Render warning if user is not signed in
  useEffect(() => {
    if (!currentUser) {
      alert('Please sign in to access the bot page.');
      window.location.href = '/'; 
    }
  }, [currentUser]);

  if (!currentUser) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="bg-gray-50  flex flex-col " >
        
        <div className="chat-container overflow-auto flex-grow">
          {messages.map((message, index) => (
            <div key={index} className={`chat-bubble ${message.sender}-bubble`}>
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          ))}
        </div>
        <form
          onSubmit={generateAnswer}
          className="w-full m-auto text-center rounded bg-gray-200 py-2 fixed bottom-0 flex justify-between items-center px-4"
        >
          <textarea
            required
            className="border rounded w-5/6 my-2 min-h-fit p-3"
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            placeholder="Ask anything"
          ></textarea>

          <button
            type="submit"
            className="bg-gray-700 p-4 rounded-lg hover:bg-black transition-all duration-300 text-white text-lg"
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>
        <button
          onClick={exportChat}
          className=" hover:text-gray-700 transition-all duration-300 text-black text-md mt-4 mr-4"
          style={{ position: 'fixed', top: '1px', right: '20px' }}
        >
          Export Chat
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
