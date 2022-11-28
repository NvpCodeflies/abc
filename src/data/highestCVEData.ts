type highestCVEType = {
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

const highestCVEData: highestCVEType = [
  {
    id: 1,
    highestCVEName: 'CVE-2022-1230',
    highestCVEMore: 'see details',
    highestCVErating: {
      highestCVERatingName: 'CVSS',
      highestCVERatingrate: '9.8',
      highestCVERatingSeverity: 'Critical severity',
      highestCVESublist: [
        {
          highestCVESublistName: 'Published',
          highestCVESublistValue: '12/29/2020',
        },
        {
          highestCVESublistName: 'CWE',
          highestCVESublistValue: '287 (improper Authentication)',
        },
      ],
    },
    highestCVEDescription:
      'The SolarWinds Orion API vulnerable to on authentication bypass that could allow a remote attacker to execute API command',
  },
  {
    id: 2,
    highestCVEName: 'CVE-2022-1230',
    highestCVEMore: 'see details',
    highestCVErating: {
      highestCVERatingName: 'CVSS',
      highestCVERatingrate: '9.8',
      highestCVERatingSeverity: 'Critical severity',
      highestCVESublist: [
        {
          highestCVESublistName: 'Published',
          highestCVESublistValue: '12/29/2020',
        },
        {
          highestCVESublistName: 'CWE',
          highestCVESublistValue: '287 (improper Authentication)',
        },
      ],
    },
    highestCVEDescription:
      'The SolarWinds Orion API vulnerable to on authentication bypass that could allow a remote attacker to execute API command',
  },
  {
    id: 3,
    highestCVEName: 'CVE-2022-1230',
    highestCVEMore: 'see details',
    highestCVErating: {
      highestCVERatingName: 'CVSS',
      highestCVERatingrate: '9.8',
      highestCVERatingSeverity: 'Critical severity',
      highestCVESublist: [
        {
          highestCVESublistName: 'Published',
          highestCVESublistValue: '12/29/2020',
        },
        {
          highestCVESublistName: 'CWE',
          highestCVESublistValue: '287 (improper Authentication)',
        },
      ],
    },
    highestCVEDescription:
      'The SolarWinds Orion API vulnerable to on authentication bypass that could allow a remote attacker to execute API command',
  },
];

export default highestCVEData;
