import React from 'react';

const FeatureCard = ({children, title, description }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="px-10 pt-10">
        {children}
        </div>
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;