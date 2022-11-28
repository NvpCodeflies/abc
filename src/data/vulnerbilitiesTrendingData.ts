import image from '../assets/img/image.png';

type vulnarbilitiesTrendingDataTypes = {
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

const vulnarbilitiesTrendingData: vulnarbilitiesTrendingDataTypes = {
  vulnerbilityList: [
    {
      id: 1,
      vulnerbilityImage: image,
      vulnerbilityName: 'CVE-2021-4034',
      vulnerbilityDesription:
        'Trend Micro Threat Research observed active exploitation of the Spring4shell vulnerbility assigned as CVE-2022-22965, which allows malicious actors to weaponize and execute the Mirai botnet malware',
    },
    {
      id: 2,
      vulnerbilityImage: image,
      vulnerbilityName: 'CVE-2021-4034',
      vulnerbilityDesription:
        'Trend Micro Threat Research observed active exploitation of the Spring4shell vulnerbility assigned as CVE-2022-22965, which allows malicious actors to weaponize and execute the Mirai botnet malware',
    },
    {
      id: 3,
      vulnerbilityImage: image,
      vulnerbilityName: 'CVE-2021-4034',
      vulnerbilityDesription:
        'Trend Micro Threat Research observed active exploitation of the Spring4shell vulnerbility assigned as CVE-2022-22965, which allows malicious actors to weaponize and execute the Mirai botnet malware',
    },
  ],
  moreLink: {
    moreLinkURL: '#',
    moreLinkText: 'Explore more on our CVE Lab',
  },
};

export default vulnarbilitiesTrendingData;
