'use client';

import Image from 'next/image';
import React, { cloneElement, createContext, useContext, useState } from 'react';

import { OpenProps, SidebarContextType, SidebarProps, WindowProps } from '@/types/sidebar.type';

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Compound Sidebar Component
function Sidebar({ children }: SidebarProps) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <SidebarContext.Provider
      value={{
        openName,
        close,
        open,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// Open Function
function Open({ children, opens: opensWindowName }: OpenProps) {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('Open must be used within a Sidebar');
  }
  const { open } = context;

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

// Window Component to render inside the sidebar
function Window({ children, name }: WindowProps) {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('Window must be used within a Sidebar');
  }
  const { openName, close } = context;

  if (name !== openName) return null;

  return (
    <aside className="fixed inset-0 flex justify-end">
      <div className="grow bg-slate-800 opacity-50"></div>
      <div className="w-[30rem] overflow-y-auto bg-white px-6 py-8 xl:w-[32rem]">
        <button className="absolute right-6 top-10" onClick={close}>
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

Sidebar.Open = Open;
Sidebar.Window = Window;

export default Sidebar;
