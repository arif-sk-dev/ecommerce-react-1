import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-25 pb-16">

        {/* Breadcrumb Navigation start */}
            <div className="px-2 pt-5 mb-5">
              <nav className="text-sm text-zinc-500">
                <ol className="list-reset flex flex-wrap items-center gap-1">
                  <li>
                    <Link to="/" className="hover:text-black font-medium">Home</Link>
                    <span className="mx-1">/</span>
                  </li>
                  <li className="text-zinc-700 font-semibold truncate max-w-[80vw]">About Us</li>
                </ol>
              </nav>
            </div>
            {/* Breadcrumb Navigation end */}

      {/* Intro */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-400 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-gray-800">CLOTHING</span> — where style meets simplicity. We’re more than just a store; we’re a destination for curated experiences.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To deliver high-quality products that inspire confidence, creativity, and connection. Every item is handpicked with purpose.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
          <p className="text-gray-600">
            To become the go-to platform for modern shoppers who value authenticity, design, and seamless service.
          </p>
        </div>
      </div>

      {/* Main Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What We Stand For</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Quality</h3>
            <p className="text-sm text-gray-600">We obsess over details to ensure every product exceeds expectations.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Creativity</h3>
            <p className="text-sm text-gray-600">From design to delivery, we infuse creativity into every step.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Trust</h3>
            <p className="text-sm text-gray-600">We build long-term relationships through transparency and care.</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center">
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-red-400 text-white rounded-full hover:bg-red-500 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default About;

