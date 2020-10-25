/* eslint-disable react/prop-types */
import React from 'react';

interface NewProps {
  title: string;
  description: string;
}

const New: React.FC<NewProps> = ({ title, description, children }) => {
  return (
    <div className="news-container">
      {children}
      <div className="text-container">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default New;
