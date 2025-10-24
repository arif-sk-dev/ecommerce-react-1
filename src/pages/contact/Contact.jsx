// Contact.jsx 
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import BusinessHours from "./BusinessHours";
import { Link } from "react-router-dom";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Simulate success
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };


  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-25 pb-16">
      <Toaster position="top-right" />

        {/* Breadcrumb Navigation start */}
      <div className="px-2 pt-5 mb-5">
        <nav className="text-sm text-zinc-500">
          <ol className="list-reset flex flex-wrap items-center gap-1">
            <li>
              <Link to="/" className="hover:text-black font-medium">Home</Link>
              <span className="mx-1">/</span>
            </li>
            <li className="text-zinc-700 font-semibold truncate max-w-[80vw]">Contact Us</li>
          </ol>
        </nav>
      </div>
      {/* Breadcrumb Navigation end */}

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-400 mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h2>
            <p className="text-gray-600">Email: support@clothing.com</p>
            <p className="text-gray-600">Phone: +880 1234 567890</p>
          </div>

            {/* Dynamic Status */}
            <BusinessHours />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Location</h2>
            <p className="text-gray-600 mb-4">CLOTHING HQ, Gulshan Avenue, Dhaka, Bangladesh</p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902097801901!2d90.4125180751075!3d23.75090377869559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894f9c9e3a5%3A0x7f2e3b9f8f1e6a2b!2sGulshan%20Ave%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1697540000000!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
