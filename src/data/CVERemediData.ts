type CVERemediType = {
  CVEHead: {
    title: string;
    score: string;
  };
  CVERemediList: {
    id: number;
    name: string;
    CVEScore: {
      rating: string;
      criticality: string;
    };
  }[];
};

const CVERemediData: CVERemediType = {
  CVEHead: {
    title: 'CVE',
    score: 'CVSS Score',
  },
  CVERemediList: [
    {
      id: 1,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 2,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 3,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 4,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 5,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 6,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 7,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 8,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 9,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
    {
      id: 10,
      name: 'CVE-2022-1230',
      CVEScore: {
        rating: '9.8',
        criticality: 'Critical',
      },
    },
  ],
};

export default CVERemediData;
