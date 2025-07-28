import React, { useEffect } from 'react';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  content: React.ReactNode;
}

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose, title, image, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2" onClick={onClose}>
      <div className="bg-white shadow-2xl max-w-lg w-full p-8 relative animate-fade-in max-h-[95vh] flex flex-col rounded-2xl my-4" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl mb-8 flex-shrink-0"
        />
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex-shrink-0">{title}</h2>
        <div className="text-gray-700 text-lg leading-relaxed overflow-y-auto pr-2 flex-1">
          {content}
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
