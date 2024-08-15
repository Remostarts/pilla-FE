import { ReactElement, ReactNode } from 'react';

export type SidebarContextType = {
  openName: string;
  close: () => void;
  open: (name: string) => void;
};

export type SidebarProps = {
  children: ReactNode;
};

export type OpenProps = {
  children: ReactElement;
  opens: string;
};

export type WindowProps = {
  children: ReactElement;
  name: string;
};
