import React from 'react';

const UiButton = (props) => {
  return (
    <div>
      <button type="button" className="text-white transition duration-150 bg-primary hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.label}</button>
    </div>
  );
};

export default UiButton;