import React from 'react';
import './highestCVE.css';

type propsType = {
  highestCVEData: {
    id: number;
    highestCVEName: string;
    highestCVEMore: string;
    highestCVErating: {
      highestCVERatingName: string;
      highestCVERatingrate: string;
      highestCVERatingSeverity: string;
      highestCVESublist: {
        highestCVESublistName: string;
        highestCVESublistValue: string;
      }[];
    };
    highestCVEDescription: string;
  }[];
};

const HighestCVE = (props: propsType) => {
  const { highestCVEData } = props;

  return (
    <div className="highest-cve_wrapper">
      {highestCVEData &&
        highestCVEData.map((cveItem) => (
          <div className="hightest-cve_item" key={cveItem.id}>
            <div className="highest-cve_title">
              <h5>{cveItem.highestCVEName}</h5>
              <span>{cveItem.highestCVEMore}</span>
            </div>
            <div className="highest-cve_details">
              <span>{cveItem.highestCVErating.highestCVERatingName}</span>
              <span className="highest-cve_rating">{cveItem.highestCVErating.highestCVERatingrate}</span>
              <p className="highest-cve_severity">{cveItem.highestCVErating.highestCVERatingSeverity}</p>
              {cveItem.highestCVErating.highestCVESublist &&
                cveItem.highestCVErating.highestCVESublist.map((sublistItem) => (
                  <p className="highest-cve_sublist" key={sublistItem.highestCVESublistValue}>
                    {sublistItem.highestCVESublistName} : {sublistItem.highestCVESublistValue}
                  </p>
                ))}
            </div>

            <div className="highest-cve_description">
              <p>{cveItem.highestCVEDescription}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HighestCVE;
