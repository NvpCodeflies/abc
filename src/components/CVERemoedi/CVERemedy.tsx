import React from 'react';
type propsType = {
  CVERemediData: {
    CVEHead: [title: string, score: string];
    CVERemediList: {
      id: number;
      name: string;
      CVEScore: {
        rating: string;
        criticality: string;
      };
    }[];
  };
};

const CVERemedy = (props: propsType) => {
  return (
    <div className="cve-remedy_wrapper">
      <div className="cve-remedy_row">
        <div className="cve_remedy_column"></div>
      </div>
    </div>
  );
};

export default CVERemedy;
