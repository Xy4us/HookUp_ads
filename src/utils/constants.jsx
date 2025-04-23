import {
  faArrowTrendUp,
  faBullhorn,
  faChartSimple,
  faCommentSms,
  faDisplay,
  faEnvelope,
  faMobile,
  faNewspaper,
  faPenNib,
  faRocket,
  faUsers,
  faVideo,
  faUsersSlash,
  faClock,
  faDatabase,
  faFlag,
  faComputer,
  faMoneyCheckDollar,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export const chooseUsData = [
  {
    icon: faUsers,
    heading: "300+ clients served",
    para: "We have served over 300 clients, and have helped them grow their business.",
  },
  {
    icon: faEnvelope,
    heading: "Email Marketing",
    para: "We have the best email marketing services, to help you reach your customers.",
  },
  {
    icon: faCommentSms,
    heading: "Bulk SMS",
    para: "We have the best SMS marketing services, to help you reach your customers.",
  },
  {
    icon: faVideo,
    heading: "Video Advertising",
    para: "We have the best video advertising services, to help you reach your customers.",
  },
  {
    icon: faDisplay,
    heading: "Display Advertising",
    para: "We have the best display advertising services, to help you reach your customers.",
  },
  {
    icon: faMobile,
    heading: "Social Media",
    para: "We have the best social media marketing services, to help you reach your customers.",
  },
  {
    icon: faChartSimple,
    heading: "Performace, Network & Media",
    para: "We have the best performance, network and media services, to help you reach your customers.",
  },
  {
    icon: faRocket,
    heading: "Execution speed & Wider reach",
    para: "We have the best execution speed and wider reach services, to help you reach your customers.",
  },
];

export const advertisementMinimal = [
  {
    heading: "Boost Your Reach",
    icon: faArrowTrendUp,
  },
  {
    heading: "Increase Sales",
    icon: faChartSimple,
  },
  {
    heading: "Grow Your Business",
    icon: faRocket,
  },
];

export const publisherMinimal = [
  {
    heading: "Publish Articles",
    icon: faNewspaper,
  },
  {
    heading: "Create Content",
    icon: faPenNib,
  },
  {
    heading: "Advertise Easily",
    icon: faBullhorn,
  },
];

const importAll = (r) => {
  return r.keys().map(r);
};

const companyImages = importAll(
  require.context("../assets/Companies1", false, /\.(png|jpe?g|svg|jpg)$/)
);

export const companyImagesArray = [
  {
    images: companyImages[0],
  },
  {
    images: companyImages[1],
  },
  {
    images: companyImages[2],
  },
  {
    images: companyImages[3],
  },
  {
    images: companyImages[4],
  },
  {
    images: companyImages[5],
  },
  {
    images: companyImages[6],
  },
  {
    images: companyImages[7],
  },
  {
    images: companyImages[8],
  },
  {
    images: companyImages[9],
  },
  {
    images: companyImages[10],
  },
  {
    images: companyImages[11],
  },
  {
    images: companyImages[12],
  },
  {
    images: companyImages[13],
  },
  {
    images: companyImages[14],
  },
];

export const advertiseAdvantages = [
  {
    icon: faUsersSlash,
    heading: "Anti-Fraud",
    para: "We have the best anti-fraud services, to help you reach your customers.",
  },
  {
    icon: faClock,
    heading: "Intelligent Marketing",
    para: "We provide you an intelligent marketing platform",
  },
  {
    icon: faDatabase,
    heading: "Data-driven Services",
    para: "We are known for our Data-driven creative services, to help you reach your customers.",
  },
  {
    icon: faRobot,
    heading: "AI Performance",
    para: "We have an AI Performance optimization",
  },
];

export const publisherAdvantages = [
  {
    icon: faComputer,
    heading: "Diverse ad-formats",
    para: "We have a diverse range of ad-formats for you to choose from.",
  },

  {
    icon: faFlag,
    heading: "Latest technology",
    para: "We use the latest technology to provide you with the best possible experience",
  },
  {
    icon: faUsers,
    heading: "Wide network",
    para: "We have the wide connectivity of our users",
  },
  {
    icon: faMoneyCheckDollar,
    heading: "Hassle free payment",
    para: "We provide payment without any interruption",
  },
];

export const headersLinks = [
  {
    heading: "Home",
    page: "/",
  },
  {
    heading: "Advertisers",
    page: "/advertiser",
  },
  {
    heading: "Publishers",
    page: "/publisher",
  },
  {
    heading: "Contact",
    page: "/contact-us",
  },
];
