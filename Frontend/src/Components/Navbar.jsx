import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="img"
              className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-3"
            />
            <span className="ml-3 text-xl color white">Githubify</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="/explore" className="mr-5 hover:text-gray-900">
              Docs
            </a>
            <a href="/history" className="mr-5 hover:text-gray-900">
              History
            </a>
            <a href="/" className="mr-5 hover:text-gray-900">
              About us
            </a>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white text-base mt-4 md:mt-0">
            Log In
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
