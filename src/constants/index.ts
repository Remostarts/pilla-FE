import { SideNavItem } from '@/types';

export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
];
export const topHeaderItems = [
  [
    { icon: '/assets/icons/phone-5.svg', content: '+880 123123123' },
    { icon: '/assets/icons/mail.svg', content: 'procleaner.owner@mail.com' },
  ],
  [
    { icon: '/assets/icons/clock.svg', content: '8:00am - 10:00pm Mon - Sun' },
    { icon: '/assets/icons/location.svg', content: 'Dhaka, Bangladesh' },
  ],

  {
    isSocial: true,
    links: [
      {
        icon: '/assets/icons/facebook-1.svg',
        content: 'https://www.facebook.com',
        className: 'facebook',
      },
      {
        icon: '/assets/icons/instagram.svg',
        content: 'https://www.bookmark.com',
        className: 'instagram',
      },
      {
        icon: '/assets/icons/x.svg',
        content: 'https://www.x.com',
        className: 'x',
      },
      {
        icon: '/assets/icons/linkedin.svg',
        content: 'https://www.linkedin.com',
        className: 'linkedin',
      },
    ],
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/dashboard-home',
    icon: '/assets/icons/star.svg',
  },
  {
    title: 'Product',
    icon: '/public/assets/icons/star.svg',
    submenu: true,
    subMenuItems: [
      { title: 'Child-one', path: '/child-one', icon: '/assets/icons/star.svg' },
      { title: 'Child-two', path: '/child-two', icon: '/assets/icons/star.svg' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: '/assets/icons/home.svg',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: '/assets/icons/home.svg',
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: '../../public/assets/icons/home.svg',
  },
];
