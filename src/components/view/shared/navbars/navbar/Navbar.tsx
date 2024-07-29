import ReNav, { TNavItem } from '@/components/re-ui/ReNav';
import ReTheme from '@/components/re-ui/ReTheme';

const components: { subTitle: string; href: string; description: string }[] = [
  {
    subTitle: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    subTitle: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    subTitle: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    subTitle: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    subTitle: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    subTitle: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const leftNav: TNavItem[] = [
  {
    dropdown: true,
    title: 'Primitives',
    href: '/docs/primitives/alert-dialog',
    content: components,
  },
  {
    dropdown: true,
    title: 'Components',
    href: '/docs/components/alert-dialog',
    content: components,
  },
  {
    dropdown: true,
    title: 'new',
    href: '/docs/components/alert-dialog',
    content: components,
  },
  {
    dropdown: false,
    title: 'Documents',
    href: '/docs',
  },
];
const midNav = { midNavSearch: true };

const Navbar = () => {
  return (
    <ReNav
      leftNav={leftNav}
      midNav={midNav}
      loginButton={true}
      additionalElement={
        <>
          <ReTheme />
        </>
      }
    />
  );
};

export default Navbar;
