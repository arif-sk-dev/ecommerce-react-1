import React from "react";

const Privacy = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-red-400 mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        Your privacy matters. Here's how we collect, use, and protect your data:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>We collect minimal personal data to process orders.</li>
        <li>We never sell or share your information with third parties.</li>
        <li>All transactions are secured using SSL encryption.</li>
        <li>You can request data deletion at any time.</li>
      </ul>
    </section>
  );
};

export default Privacy;
