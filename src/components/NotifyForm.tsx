import React, { useState } from 'react';

/**
 * NotifyForm component shows a 'Notify Me' button. Clicking it opens a modal with the embedded Google Form.
 */
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSellKa2cyIuRGLtodmb0NJiTEk3DDzKxB0WcfohvBK21467Lw/viewform?embedded=true";

const NotifyForm: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center py-8">
      <button
        className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium shadow-lg"
        onClick={() => setOpen(true)}
      >
        Notify Me
      </button>
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-4 max-w-full w-[90vw] sm:w-[640px] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Notify Me Form"
              style={{ border: 0 }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotifyForm;
