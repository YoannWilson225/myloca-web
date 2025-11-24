'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 'my-visits', label: 'My Visits', icon: '📍', active: false },
  { id: 'bookings', label: 'Bookings', icon: '📅', active: true },
  { id: 'orders', label: 'Orders', icon: '🛍️', active: false },
  { id: 'menu', label: 'Menu', icon: '📋', active: false },
  { id: 'transactions', label: 'Transactions', icon: '💳', active: false },
  { id: 'settings', label: 'Settings', icon: '⚙️', active: false },
];

export const Sidebar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <aside
      style={{
        width: '240px',
        height: '100vh',
        background: theme.colors.secondary,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: theme.colors.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: theme.fonts.bold,
            fontSize: '20px',
            color: theme.colors.secondary,
          }}
        >
          M
        </div>
        <div>
          <h1
            style={{
              fontFamily: theme.fonts.bold,
              fontSize: '18px',
              color: theme.colors.white,
              margin: 0,
            }}
          >
            MyLoca
          </h1>
        </div>
      </div>

      {/* Menu Items */}
      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              marginBottom: '8px',
              borderRadius: '8px',
              cursor: 'pointer',
              background: item.active ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!item.active) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span
              style={{
                fontFamily: item.active ? theme.fonts.semiBold : theme.fonts.medium,
                fontSize: '14px',
                color: theme.colors.white,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.1)',
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: theme.colors.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: theme.fonts.bold,
            fontSize: '16px',
            color: theme.colors.secondary,
          }}
        >
          JD
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: theme.fonts.semiBold,
              fontSize: '14px',
              color: theme.colors.white,
              margin: 0,
            }}
          >
            John Doe
          </p>
          <p
            style={{
              fontFamily: theme.fonts.regular,
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0,
            }}
          >
            john@myloca.com
          </p>
        </div>
      </div>
    </aside>
  );
};

