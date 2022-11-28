import logo from '../assets/img/logo.png';
import platformImg from '../assets/img/header1.png';
import companyImg from '../assets/img/company.png';
import cyberRiskImg from '../assets/img/cyber-risk-hub.png';

interface HeaderDataInterface {
  logo: {
    logoURL: string;
    logoLink: string;
  };
  topNav: {
    linkName: string;
    linkURL: string;
  }[];
  menus: {
    menuName: string;
    menuLink?: string;
    submenu?: {
      title: string;
      submenuLinks: {
        submenuLabel?: string;
        submenuLink: string;
        submenuLinkTitle: string;
        submenuLinkSubtitle: string;
      }[];
    }[];
    headerRight?: {
      imgURL: string;
      title: string;
      subtitle: string;
      buttonURL: string;
      buttonText: string;
    };
  }[];
  buttonRight: {
    buttonURL: string;
    buttonText: string;
  };
}

const headerData: HeaderDataInterface = {
  logo: {
    logoURL: `${logo}`,
    logoLink: 'https://vulcan.io',
  },
  topNav: [
    {
      linkName: 'Blog',
      linkURL: 'https://vulcan.io/blog/',
    },
    {
      linkName: 'Careers',
      linkURL: 'https://vulcan.io/careers/',
    },
    {
      linkName: 'Contact Us',
      linkURL: 'https://vulcan.io/contact-us/',
    },
  ],
  menus: [
    {
      menuName: 'platform',
      submenu: [
        {
          title: 'Platform',
          submenuLinks: [
            {
              submenuLink: 'https://vulcan.io/platform/',
              submenuLinkTitle: 'Cyber Risk Management Platform',
              submenuLinkSubtitle: 'Go beyond vulnerability scanning',
            },
            {
              submenuLink: 'https://vulcan.io/integrations/',
              submenuLinkTitle: 'Connectors',
              submenuLinkSubtitle: 'Integrate your cyber risk data',
            },
            {
              submenuLink: 'https://vulcan.io/pricing/',
              submenuLinkTitle: 'Pricing',
              submenuLinkSubtitle: 'Explore plans designed for you',
            },
          ],
        },
        {
          title: 'SOLUTIONS',
          submenuLinks: [
            {
              submenuLink: 'https://vulcan.io/solution/risk-based-vulnerability-management',
              submenuLinkTitle: 'Risk-Based Vulnerability Management ',
              submenuLinkSubtitle: 'For IT security and SecOps teams',
            },
            {
              submenuLink: 'https://vulcan.io/solution/application-vulnerability-management',
              submenuLinkTitle: 'Application Vulnerability Management ',
              submenuLinkSubtitle: 'For application and DevSecOps teams',
            },
            {
              submenuLink: 'https://vulcan.io/solution/cloud-vulnerability-management',
              submenuLinkTitle: 'Cloud Vulnerability Management ',
              submenuLinkSubtitle: 'For cloud-native and DevOps teams',
            },
          ],
        },
      ],
      headerRight: {
        imgURL: `${platformImg}`,
        title: '150,000 threats identified. Now what?',
        subtitle:
          'Attend our live webinar to learn how to gain control of your vulnerability and risk data using data correlation capabilities.',
        buttonURL:
          'https://www.brighttalk.com/webcast/17864/560046?utm_source=VulcanCyber&utm_medium=brighttalk&utm_campaign=560046',
        buttonText: 'Register here',
      },
    },
    {
      menuName: 'CYBER RISK HUB',
      submenu: [
        {
          title: 'LIBRARY',
          submenuLinks: [
            {
              submenuLink: 'https://vulcan.io/blog/',
              submenuLinkTitle: 'Blog',
              submenuLinkSubtitle: 'Keep up with the latest cyber risk news',
            },
            {
              submenuLink: 'https://vulcan.io/resources/',
              submenuLinkTitle: 'Resources',
              submenuLinkSubtitle: 'Own your risk',
            },
          ],
        },
        {
          title: 'Community',
          submenuLinks: [
            {
              submenuLink: 'https://vulcan.io/solution/risk-based-vulnerability-management',
              submenuLinkTitle: 'The CyberRisk Summit',
              submenuLabel: 'free ticket',
              submenuLinkSubtitle: 'Join on Dec 6, 2022 – virtual & free',
            },
            {
              submenuLink: 'https://cyber-risk-community.slack.com/ssb/redirect',
              submenuLinkTitle: 'Slack Community ',
              submenuLinkSubtitle: 'The Slack workplace dedicated to cyber risks',
            },
          ],
        },
        {
          title: 'CVE LAB',
          submenuLinks: [
            {
              submenuLink: 'https://vulcan.io/category/research-voyager-18/',
              submenuLinkTitle: 'Voyager18 Research',
              submenuLinkSubtitle: 'Read the latest research trends',
            },
            {
              submenuLink: 'https://vulcan.io/vulcan-free/',
              submenuLinkTitle: 'Vulcan Free',
              submenuLabel: 'FREE TOOL',
              submenuLinkSubtitle: 'Start now – Prioritize your cyber risk',
            },
            {
              submenuLink: 'https://vulcan.io/remedy-cloud',
              submenuLinkTitle: 'Remedy Cloud',
              submenuLinkSubtitle: 'Find the fixes for your critical CVEs',
            },
            {
              submenuLink: 'https://mitremapper.voyager18.io/',
              submenuLinkTitle: 'MITRE Mapper',
              submenuLinkSubtitle: 'Mapping CVEs to MITRE ATT&CK',
            },
          ],
        },
      ],
      headerRight: {
        imgURL: `${cyberRiskImg}`,
        title: 'The CyberRisk Summit is back | Dec 6',
        subtitle:
          'Get ready for the next Vulcan Cyber user conference on Dec 6, with two hours dedicated to reaping the cyber risk landscape in 2022.',
        buttonURL:
          'https://hopin.com/events/cyberrisk-summit-december-2022?utm_source=Vulcan%20Website&utm_campaign=navigation%20bar',
        buttonText: 'Get your free ticket',
      },
    },
    {
      menuName: 'COMPANY',
      submenu: [
        {
          title: 'GET TO KNOW VULCAN',
          submenuLinks: [
            {
              submenuLink: 'https://vulcan.io/about/',
              submenuLinkTitle: 'About',
              submenuLinkSubtitle: 'Learn who we are and what we’re about',
            },
            {
              submenuLink: 'https://vulcan.io/awards-and-recognition/',
              submenuLinkTitle: 'Awards & Recognition',
              submenuLinkSubtitle: 'Get all the proof you need',
            },
            {
              submenuLink: 'https://vulcan.io/careers/',
              submenuLinkTitle: 'Careers',
              submenuLinkSubtitle: 'Join the leading minds in cyber security',
            },
          ],
        },
        {
          title: 'GET IN TOUCH',
          submenuLinks: [
            {
              submenuLink: 'https://vulcan.io/partners/',
              submenuLinkTitle: 'Partners',
              submenuLinkSubtitle: 'Partner with Vulcan Cyber',
            },
            {
              submenuLink: 'https://vulcan.io/contact-us/',
              submenuLinkTitle: 'Contact Us',
              submenuLinkSubtitle: 'Let us know we can help',
            },
          ],
        },
      ],
      headerRight: {
        imgURL: `${companyImg}`,
        title: 'Try Vulcan Enterprise for 30 days',
        subtitle:
          'Get your Vulcan Cyber trial. Consolidate, analyze and prioritize vulnerability risk across IT, cloud and application environments.',
        buttonURL: 'https://vulcan.io/lp/trial',
        buttonText: 'START YOUR TRIAL NOW',
      },
    },
    {
      menuName: 'Pricing',
      menuLink: 'https://vulcan.io/pricing/',
    },
  ],
  buttonRight: {
    buttonURL: 'https://vulcan.io/lp/trial',
    buttonText: 'TRY VULCAN',
  },
};

export default headerData;
