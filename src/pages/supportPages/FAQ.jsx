import React, { useState } from 'react'

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unused and in original packaging. Refunds are processed within 5–7 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location. You’ll see options at checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you’ll receive a tracking link via email. You can also check your order status in your account dashboard.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be modified or canceled within 2 hours of placement. Contact support immediately for assistance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='max-w-screen mx-auto px-4 py-20'>
      <h1 className="text-4xl font-bold text-red-400 mb-10 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition text-left"
            >
              <span className="text-lg font-medium text-gray-800">{item.question}</span>
              <span className="text-xl text-red-400">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm bg-gray-50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ