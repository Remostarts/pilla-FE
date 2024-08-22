'use client';

import React, { createContext, useState, useContext, cloneElement } from 'react';
import Image from 'next/image';

import { OpenProps, SidebarContextType, SidebarProps, WindowProps } from '@/types/sidebar.type';

// Context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Main Sidebar Component
function Sidebar({ children }: SidebarProps) {
  const [openNames, setOpenNames] = useState<string[]>([]);

  const open = (name: string) => setOpenNames((prev) => [...prev, name]);
  const close = (name: string) => setOpenNames((prev) => prev.filter((n) => n !== name));

  return (
    <SidebarContext.Provider value={{ openNames, open, close }}>{children}</SidebarContext.Provider>
  );
}

// Custom Hook to use context
function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

// Sidebar Open Component
function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useSidebar();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (children.props.onClick) {
      children.props.onClick(event);
    }
    open(opensWindowName);
  };

  return cloneElement(children, {
    onClick: handleClick,
  });
}

// Sidebar Window Component
function Window({ children, name }: WindowProps) {
  const { openNames, close } = useSidebar();

  if (!openNames.includes(name)) return null;

  const isFirstOpen = openNames[0] === name;

  return (
    <aside className="fixed inset-0 flex justify-end">
      {isFirstOpen && <div className="grow bg-slate-800 opacity-50"></div>}
      <div className="w-[30rem] overflow-y-auto bg-white px-6 py-8 xl:w-[32rem]">
        <button className="absolute right-6 top-10" onClick={() => close(name)}>
          <Image
            src="/assets/personal-dashboard/shared/close-icon.svg"
            alt="close-icon"
            width={40}
            height={40}
          />
        </button>
        <div className="mt-20">{children}</div>
      </div>
    </aside>
  );
}

// Assigning sub-components as Property
Sidebar.Open = Open;
Sidebar.Window = Window;

export { Sidebar, useSidebar };
