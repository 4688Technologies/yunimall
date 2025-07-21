import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnnzjlov';

const NotifyForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div className="text-green-600 font-semibold py-4 animate-fade-in">
      Thank you! You'll be notified when Yunimall Logistics launches on your campus.
    </div>
  ) : (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
      onSubmit={() => setSubmitted(true)}
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
      >
        Notify Me
      </button>
    </form>
  );
};

export default NotifyForm;
