import React from 'react';

import './vulnerbilityTrending.css';

type propsType = {
  vulnerbilityData: {
    vulnerbilityList: {
      id: number;
      vulnerbilityImage: string;
      vulnerbilityName: string;
      vulnerbilityDesription: string;
    }[];
    moreLink: {
      moreLinkURL: string;
      moreLinkText: string;
    };
  };
};

const VulnerbilitiesTrending = (props: propsType) => {
  const { vulnerbilityList } = props.vulnerbilityData;
  const { moreLink } = props.vulnerbilityData;

  return (
    <div className="vulnerbilities-trend_wrapper">
      {vulnerbilityList &&
        vulnerbilityList.map((vulnerbility) => (
          <div className="vulnerbility-trend_item" key={vulnerbility.id}>
            <div className="vulnerbility-trending_image">
              <img src={vulnerbility.vulnerbilityImage} alt="" />
            </div>
            <div className="vulnerbility_trend_content">
              <h3>{vulnerbility.vulnerbilityName}</h3>
              <p>{vulnerbility.vulnerbilityDesription}</p>
            </div>
          </div>
        ))}

      {moreLink && <span className="moreLink">{moreLink.moreLinkText}</span>}
    </div>
  );
};

export default VulnerbilitiesTrending;
