import React from "react";

const Terms = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-red-400 mb-6">Terms & Conditions</h1>
      <p className="text-gray-700 mb-4">
        By using our website, you agree to the following terms:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>All content is owned by SHOP and protected by copyright.</li>
        <li>Prices and availability are subject to change without notice.</li>
        <li>Users must be 18+ or have parental consent to purchase.</li>
        <li>We reserve the right to refuse service at our discretion.</li>
      </ul>
    </section>
  );
};

export default Terms;
