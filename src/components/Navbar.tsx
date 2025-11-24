'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, isDark, setThemeMode } = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const [notificationCount] = useState(3);

  const toggleTheme = () => {
    setThemeMode(isDark ? 'light' : 'dark');
  };

  return (
    <nav
      style={{
        height: '72px',
        background: theme.colors.card,
        borderBottom: `1px solid ${theme.colors.border}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        gap: '24px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Barre de recherche */}
      <div
        style={{
          flex: 1,
          maxWidth: '500px',
          position: 'relative',
        }}
      >
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            width: '100%',
            height: '44px',
            padding: '0 16px 0 44px',
            borderRadius: '10px',
            border: `1px solid ${theme.colors.border}`,
            background: theme.colors.background,
            color: theme.colors.text,
            fontFamily: theme.fonts.regular,
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.colors.secondary;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '18px',
            color: theme.colors.textMuted,
          }}
        >
          🔍
        </span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Bouton de notification */}
      <button
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          border: `1px solid ${theme.colors.border}`,
          background: theme.colors.background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = theme.colors.backgroundSecondary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = theme.colors.background;
        }}
      >
        <span style={{ fontSize: '20px' }}>🔔</span>
        {notificationCount > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '20px',
              height: '20px',
              borderRadius: '10px',
              background: theme.colors.error,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: theme.fonts.bold,
              fontSize: '10px',
              color: theme.colors.white,
            }}
          >
            {notificationCount > 9 ? '9+' : notificationCount}
          </div>
        )}
      </button>

      {/* Toggle thème */}
      <button
        onClick={toggleTheme}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          border: `1px solid ${theme.colors.border}`,
          background: theme.colors.background,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = theme.colors.backgroundSecondary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = theme.colors.background;
        }}
      >
        <span style={{ fontSize: '20px' }}>{isDark ? '☀️' : '🌙'}</span>
      </button>
    </nav>
  );
};

