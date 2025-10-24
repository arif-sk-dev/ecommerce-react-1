import React from "react";
import { FaShippingFast, FaShieldAlt, FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-red-400 text-3xl" />,
    title: "Fast & Free Shipping",
    description: "Enjoy lightning-fast delivery on all orders over $50, with no hidden fees.",
  },
  {
    icon: <FaShieldAlt className="text-red-400 text-3xl" />,
    title: "Secure Payments",
    description: "Your transactions are protected with industry-grade encryption and fraud prevention.",
  },
  {
    icon: <FaStar className="text-red-400 text-3xl" />,
    title: "Top-Rated Products",
    description: "Handpicked items with verified reviews and customer satisfaction guaranteed.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition flex flex-col justify-center items-center">
              <div className="mb-4 items">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
