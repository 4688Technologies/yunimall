import React from 'react';
import ReactDOM from 'react-dom';

interface ComingSoonModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: React.ReactNode;
  badge?: React.ReactNode;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ open, onClose, title, message, badge }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center animate-pop-in"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-900 hover:text-yellow-500 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="mb-4">
          {/* Animated Icon */}
          <svg className="w-16 h-16 text-yellow-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-blue-900 mb-2 animate-fade-in-slow">{title || 'Coming Soon!'}</h2>
        <p className="text-gray-700 text-center mb-4 animate-fade-in-slow">
          {message || (<><span>This feature is still under development.<br />Stay tuned for updates!</span></>)}
        </p>
        {badge !== undefined ? badge : (
          <span className="inline-block px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg font-semibold animate-pulse">
            🚧 Work in Progress 🚧
          </span>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ComingSoonModal;
