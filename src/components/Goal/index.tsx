/* eslint-disable react/prop-types */
import React from 'react';

interface GoalProps {
  item: string;
}

const Goal: React.FC<GoalProps> = ({ item, children }) => {
  return (
    <div className="goal-item">
      <p>
        <i>{item}</i>
      </p>
      {children}
    </div>
  );
};

export default Goal;
