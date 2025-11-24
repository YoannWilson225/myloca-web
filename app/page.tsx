'use client';

import { MainLayout } from '@/components/MainLayout';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <div>
        <h1
          style={{
            fontFamily: theme.fonts.bold,
            fontSize: '32px',
            color: theme.colors.text,
            marginBottom: '16px',
          }}
        >
          Bienvenue sur MyLoca
        </h1>
        <p
          style={{
            fontFamily: theme.fonts.regular,
            fontSize: '16px',
            color: theme.colors.textSecondary,
            marginBottom: '32px',
          }}
        >
          Gérez vos locations, réservations et bien plus encore en toute simplicité.
        </p>

        {/* Cartes d'exemple */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '32px',
          }}
        >
          {[
            { title: 'Réservations', value: '50', color: theme.colors.secondary },
            { title: 'Commandes', value: '32', color: theme.colors.success },
            { title: 'Transactions', value: '128', color: theme.colors.warning },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                background: theme.colors.card,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: '16px',
                padding: '24px',
                boxShadow: `0 2px 8px ${theme.colors.shadow}`,
              }}
            >
              <h3
                style={{
                  fontFamily: theme.fonts.semiBold,
                  fontSize: '14px',
                  color: theme.colors.textSecondary,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: theme.fonts.bold,
                  fontSize: '36px',
                  color: card.color,
                  margin: 0,
                }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Section exemple avec boutons */}
        <div
          style={{
            marginTop: '48px',
            background: theme.colors.card,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: '16px',
            padding: '32px',
            boxShadow: `0 2px 8px ${theme.colors.shadow}`,
          }}
        >
          <h2
            style={{
              fontFamily: theme.fonts.bold,
              fontSize: '24px',
              color: theme.colors.text,
              marginBottom: '16px',
            }}
          >
            Actions rapides
          </h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              style={{
                background: theme.colors.secondary,
                color: theme.colors.white,
                fontFamily: theme.fonts.semiBold,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Nouvelle réservation
            </button>
            <button
              style={{
                background: 'transparent',
                color: theme.colors.secondary,
                fontFamily: theme.fonts.semiBold,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: `2px solid ${theme.colors.secondary}`,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = theme.colors.secondaryLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Voir les rapports
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
