/* eslint-disable react/prop-types */
import React from 'react';

interface ProgressBarProps {
  title: string;
  color: string;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  color,
  progress,
}) => {
  return (
    <div className="main-progress-bar">
      <div className="box-subtitle">
        <span>{title}</span>
        <span>{`${progress}%`}</span>
      </div>
      <div className="progress-bar">
        <div
          className="fill"
          style={{ backgroundColor: color, width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
