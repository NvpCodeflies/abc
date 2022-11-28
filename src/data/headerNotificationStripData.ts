const headerNotificationData: {
  notificationBoldtext: string;
  notificationNormalText: string;
  notificationButton: {
    buttonText: string;
    buttonURL: string;
  };
}[] = [
  {
    notificationBoldtext: 'The CyberRisk Summit is back:',
    notificationNormalText: ' Join us on Dec 6. as we recap the cyber risk landscape in 2022 |',
    notificationButton: {
      buttonURL:
        'https://hopin.com/events/cyberrisk-summit-december-2022?utm_source=Vulcan%20Website&amp;utm_campaign=notification%20bar',
      buttonText: 'Get free ticket >',
    },
  },
  {
    notificationBoldtext: 'Live webinar, Oct 13:',
    notificationNormalText:
      'Attend to learn how you can duplicate vulnerability and deliver a smarter approach to cyber risk management |',
    notificationButton: {
      buttonURL:
        'https://www.brighttalk.com/webcast/17864/560046?utm_source=VulcanCyber&amp;utm_medium=brighttalk&amp;utm_campaign=560046',
      buttonText: 'Register >',
    },
  },
  {
    notificationBoldtext: 'New report:',
    notificationNormalText: 'Mapping MITRE ATT & CK framework to CVEs |',
    notificationButton: {
      buttonURL: 'https://vulcan.io/resources/mapping-cves-to-the-mitre-attack-framework/',
      buttonText: 'Read more >',
    },
  },
];

export default headerNotificationData;
