'use client';

import { motion, useCycle } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';

type MenuItemWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const DashboardNavMobile = () => {
  const pathname = usePathname();

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="sticky inset-0 z-50 grid bg-white  p-4 md:hidden">
      <div className="">
        <Image src={'/assets/images/logo-transparent.png'} height={75} width={75} alt="logo" />
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          className={`fixed inset-0 z-50 w-full md:hidden ${isOpen ? '' : 'pointer-events-none'}`}
          ref={containerRef}
        >
          <motion.div className="absolute inset-0 w-full bg-white" variants={sidebar} />
          <motion.ul variants={variants} className="absolute grid w-full gap-3 px-4 py-16">
            {SIDENAV_ITEMS.map((item, idx) => {
              return (
                <div className="w-full" key={idx}>
                  {item.submenu ? (
                    <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                  ) : (
                    <MenuItem>
                      <Link
                        href={item.path as string}
                        onClick={() => toggleOpen()}
                        className={`flex w-full items-center justify-start p-2 text-lg  ${item.path === pathname ? 'font-bold' : ''}`}
                      >
                        {item.title}
                      </Link>
                    </MenuItem>
                  )}
                </div>
              );
            })}
          </motion.ul>
          <MenuToggle toggle={toggleOpen} />
        </motion.nav>
      </div>
    </div>
  );
};

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button onClick={toggle} className="pointer-events-auto absolute right-4 top-[14px] z-30">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuItem = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

export const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({ item, toggleOpen }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem className="mt-2 w-full">
        <button
          className="mx-auto flex w-full items-center justify-start px-2 text-lg"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <span className={`${pathname.includes(item.path as string) ? 'font-bold' : ''}`}>
              {item.title}
            </span>
            <div className={`${subMenuOpen && 'rotate-180'} `}>
              <ChevronDownIcon size={20} />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="ml-2 mt-2 flex flex-col space-y-4 pl-2">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path as string}
                    onClick={() => toggleOpen()}
                    className={` ${subItem.path === pathname ? 'font-bold' : ''}`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};

// test
