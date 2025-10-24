import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-extrabold text-red-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2 bg-red-400 text-white rounded-full hover:bg-red-500 transition"
        >
          <FaArrowLeft className="mr-2" />
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
