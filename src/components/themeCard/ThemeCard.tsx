import React from 'react';
import './themeCard.css';

type propsType = {
  cardTitle: string;
  cardSubText?: string;
  children: React.ReactNode;
};

const ThemeCard = ({ cardTitle, cardSubText, children }: propsType) => {
  return (
    <div className="theme_card">
      <div className="theme_card-title">
        <h3>
          {cardTitle} <span>{cardSubText}</span>
        </h3>
      </div>
      <div className="theme_card-body">{children}</div>
    </div>
  );
};

export default ThemeCard;
