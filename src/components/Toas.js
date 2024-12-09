import React, { useState } from 'react';

const Toast = ({ message, isVisible, onClose }) => {
  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 w-80 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-3 text-white">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
