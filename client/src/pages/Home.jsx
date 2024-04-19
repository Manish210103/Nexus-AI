import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to my Chat Bot App!
      </h1>
      <p className='mb-4 text-slate-700'>
        This is a full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It utilizes the Gemini API for chat bot functionality.
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. The Gemini API is used for chat bot functionality.
      </p>
      <p className='mb-4 text-slate-700'>
        This application is designed to provide a chat bot interface where users can interact and get their doubts cleared. 
        Additionally, it includes an option to export the chat as a PDF for further use.
      </p>
      <Link to="/bot" className="text-blue-500 hover:underline">Click Here to access the bot</Link>

    </div>
  );
}
