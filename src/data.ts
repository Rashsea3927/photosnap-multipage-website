import {
  MobileStoriesMountain,
  DesktopStoriesMountain,
  MobileStoriesSunset,
  DesktopStoriesSunset,
  Mobile18daysVoyage,
  Desktop18daysVoyage,
  MobileArchitecturals,
  DesktopArchitecturals,
  MobileWorldTour,
  DesktopWorldTour,
  MobileUnforeseenCorners,
  DesktopUnforeseenCorners,
  MobileKingOnAfrica,
  DesktopKingOnAfrica,
  MobileTripToNowhere,
  DesktopTripToNowhere,
  MobileRageOfTheSea,
  DesktopRageOfTheSea,
  MobileRunningFree,
  DesktopRunningFree,
  MobileBehindTheWaves,
  DesktopBehindTheWaves,
  MobileCalmWaters,
  DesktopCalmWaters,
  MobileMilkyWay,
  DesktopMilkyWay,
  MobileDarkForest,
  DesktopDarkForest,
  MobileSomwarpet,
  DesktopSomwarpet,
  MobileLandOfDreams,
  DesktopLandOfDreams,
} from './utils/storiesAssets';

import {
  FeatureBoostExposure,
  FeatureCustomDomain,
  FeatureDragDrop,
  FeatureEmbed,
  FeatureNoLimit,
  FeatureResponsive,
} from './utils/FeaturesAssets';

export const StoriesData = [
  {
    id: 1,
    title: 'The Mountains',
    author: 'John Appleseed',
    date: 'April 16th 2020',
    images: {
      mobile: MobileStoriesMountain,
      desktop: DesktopStoriesMountain.src,
    },
  },
  {
    id: 2,
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    date: 'April 14th 2020',
    images: {
      mobile: MobileStoriesSunset,
      desktop: DesktopStoriesSunset.src,
    },
  },
  {
    id: 3,
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    date: 'April 11th 2020',
    images: {
      mobile: Mobile18daysVoyage,
      desktop: Desktop18daysVoyage.src,
    },
  },
  {
    id: 4,
    title: 'Architecturals',
    author: 'Samantha Brooke',
    date: 'April 9th 2020',
    images: {
      mobile: MobileArchitecturals,
      desktop: DesktopArchitecturals.src,
    },
  },
  {
    id: 5,
    title: 'World Tour 2019',
    author: 'Timothy Wagner',
    date: 'April 7th 2020',
    images: {
      mobile: MobileWorldTour,
      desktop: DesktopWorldTour.src,
    },
  },
  {
    id: 6,
    title: 'Unforeseen Corners',
    author: 'William Malcolm',
    date: 'April 3rd 2020',
    images: {
      mobile: MobileUnforeseenCorners,
      desktop: DesktopUnforeseenCorners.src,
    },
  },
  {
    id: 7,
    title: 'King on Africa: Part II',
    author: 'Tim Hillenburg',
    date: 'March 29th 2020',
    images: {
      mobile: MobileKingOnAfrica,
      desktop: DesktopKingOnAfrica.src,
    },
  },
  {
    id: 8,
    title: 'The Trip to Nowhere',
    author: 'Felicia Rourke',
    date: 'March 21st 2020',
    images: {
      mobile: MobileTripToNowhere,
      desktop: DesktopTripToNowhere.src,
    },
  },
  {
    id: 9,
    title: 'Rage of The Sea',
    author: 'Mohammed Abdul',
    date: 'March 19th 2020',
    images: {
      mobile: MobileRageOfTheSea,
      desktop: DesktopRageOfTheSea.src,
    },
  },
  {
    id: 10,
    title: 'Running Free',
    author: 'Michelle',
    date: 'March 16th 2020',
    images: {
      mobile: MobileRunningFree,
      desktop: DesktopRunningFree.src,
    },
  },
  {
    id: 11,
    title: 'Behind the Waves',
    author: 'Lamarr Wilson',
    date: 'March 11th 2020',
    images: {
      mobile: MobileBehindTheWaves,
      desktop: DesktopBehindTheWaves.src,
    },
  },
  {
    id: 12,
    title: 'Calm Waters',
    author: 'Samantha Brooke',
    date: 'March 9th 2020',
    images: {
      mobile: MobileCalmWaters,
      desktop: DesktopCalmWaters.src,
    },
  },
  {
    id: 13,
    title: 'The Milky Way',
    author: 'Benjamin Cruz',
    date: 'March 5th 2020',
    images: {
      mobile: MobileMilkyWay,
      desktop: DesktopMilkyWay.src,
    },
  },
  {
    id: 14,
    title: 'Night at The Dark Forest',
    author: 'Mohammed Abdul',
    date: 'March 4th 2020',
    images: {
      mobile: MobileDarkForest,
      desktop: DesktopDarkForest.src,
    },
  },
  {
    id: 15,
    title: 'Somwarpet’s Beauty',
    author: 'Michelle',
    date: 'March 1st 2020',
    images: {
      mobile: MobileSomwarpet,
      desktop: DesktopSomwarpet.src,
    },
  },
  {
    id: 16,
    title: 'Land of Dreams',
    author: 'William Malcolm',
    date: 'February 25th 2020',
    images: {
      mobile: MobileLandOfDreams,
      desktop: DesktopLandOfDreams.src,
    },
  },
];

export const FeaturesData = [
  {
    id: 1,
    title: '100% Responsive',
    paragraph:
      'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    image: FeatureResponsive,
  },
  {
    id: 2,
    title: 'No Photo Upload Limit',
    paragraph:
      'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    image: FeatureNoLimit,
  },
  {
    id: 3,
    title: 'Available to Embed',
    paragraph:
      'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
    image: FeatureEmbed,
  },
  {
    id: 4,
    title: 'Custom Domain',
    paragraph:
      'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    image: FeatureCustomDomain,
  },
  {
    id: 5,
    title: 'Boost Your Exposure',
    paragraph:
      'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    image: FeatureBoostExposure,
  },
  {
    id: 6,
    title: 'Drag & Drop Image',
    paragraph:
      'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    image: FeatureDragDrop,
  },
];
