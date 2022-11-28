import React from 'react';

interface MobileMiniNavigationProps {
  topNav: {
    linkName: string;
    linkURL: string;
  }[];
}

const MobileMiniNavigation: React.FC<MobileMiniNavigationProps> = ({ topNav }) => {
  return (
    <>
      {topNav && (
        <div className="mobile_mini-navigation">
          <ul>
            {topNav.map((topnavLink, idx) => (
              <li key={idx}>
                <a href={topnavLink.linkURL}>{topnavLink.linkName}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMiniNavigation;
