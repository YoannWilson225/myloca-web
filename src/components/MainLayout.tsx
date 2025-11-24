'use client';

import React, { ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: theme.colors.background,
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div
        style={{
          marginLeft: '240px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main
          style={{
            flex: 1,
            padding: '32px',
            background: theme.colors.background,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

