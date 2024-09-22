import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-white border-b border-primary-500'
    : 'text-[#ADB7BE]';

  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white py-2 px-4 ${buttonClasses}`} // Added padding for consistent size
    >
      {children}
    </button>
  );
};

export default TabButton;
