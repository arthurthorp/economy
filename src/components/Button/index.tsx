/* eslint-disable react/prop-types */
import React from 'react';

const Button: React.FC = ({ children }) => {
  return (
    <button className="outline-btn" type="button">
      {children}
    </button>
  );
};

export default Button;
