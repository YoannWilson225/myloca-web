# 🎨 Guide de Thème et Couleurs - MyLoca Web

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Système de thèmes](#système-de-thèmes)
3. [Palette de couleurs](#palette-de-couleurs)
4. [Typographie](#typographie)
5. [Couleurs spécialisées](#couleurs-spécialisées)
6. [Implémentation](#implémentation)
7. [Bonnes pratiques](#bonnes-pratiques)

---

## Vue d'ensemble

MyLoca utilise un système de thème dynamique avec support des modes clair et sombre. Le système est conçu pour être cohérent, accessible et facilement maintenable.

### Fonctionnalités clés

- ✅ **Mode clair/sombre** : Basculement automatique (système) ou manuel
- ✅ **Palette cohérente** : Couleurs harmonieuses et professionnelles
- ✅ **Typographie Poppins** : Police moderne avec 4 variantes (Regular, Medium, SemiBold, Bold)
- ✅ **Accessibilité** : Contraste suffisant pour tous les éléments
- ✅ **Persistence** : Sauvegarde du thème choisi par l'utilisateur

---

## Système de thèmes

### Structure du thème

```typescript
interface Theme {
  colors: {
    // Couleurs d'arrière-plan
    background: string;          // Arrière-plan principal
    backgroundSecondary: string; // Arrière-plan secondaire
    
    // Couleurs principales
    primary: string;             // Bleu marine principal
    secondary: string;           // Bleu action
    secondaryLight: string;      // Bleu clair pour fond
    
    // Couleurs de texte
    text: string;                // Texte principal
    textSecondary: string;       // Texte secondaire
    textMuted: string;           // Texte atténué
    
    // Bordures et séparateurs
    border: string;              // Bordure standard
    borderLight: string;         // Bordure légère
    
    // Cartes et surfaces
    card: string;                // Carte principale
    cardSecondary: string;       // Carte secondaire
    
    // États et feedback
    success: string;             // Vert - succès
    successLight: string;        // Fond vert clair
    error: string;               // Rouge - erreur
    warning: string;             // Orange - avertissement
    
    // Utilitaires
    white: string;               // Blanc pur
    black: string;               // Noir pur
    overlay: string;             // Overlay modal (avec transparence)
    shadow: string;              // Ombre (avec transparence)
  };
  fonts: {
    regular: string;             // Poppins-Regular
    medium: string;              // Poppins-Medium
    semiBold: string;            // Poppins-SemiBold
    bold: string;                // Poppins-Bold
  };
  isDark: boolean;               // Indicateur du mode actuel
}
```

### Modes disponibles

```typescript
type ThemeMode = 'system' | 'light' | 'dark';
```

- **system** : Suit automatiquement le thème du système d'exploitation
- **light** : Force le mode clair
- **dark** : Force le mode sombre

---

## Palette de couleurs

### Mode Clair (Light Theme)

```typescript
const lightTheme = {
  colors: {
    // Arrière-plans
    background: '#F9FAFB',          // Gris très clair
    backgroundSecondary: '#F3F4F6', // Gris clair
    
    // Principales
    primary: '#1A253E',             // Bleu marine profond
    secondary: '#2563EB',           // Bleu action vif
    secondaryLight: '#DBEAFE',      // Bleu très clair
    
    // Textes
    text: '#1A1A1A',                // Noir quasi-pur
    textSecondary: '#6B7280',       // Gris moyen
    textMuted: '#9CA3AF',           // Gris clair
    
    // Bordures
    border: '#E5E7EB',              // Gris bordure
    borderLight: '#F3F4F6',         // Gris bordure légère
    
    // Cartes
    card: '#FFFFFF',                // Blanc
    cardSecondary: '#F9FAFB',       // Gris très clair
    
    // États
    success: '#10B981',             // Vert émeraude
    successLight: '#D1FAE5',        // Vert clair
    error: '#EF4444',               // Rouge vif
    warning: '#F59E0B',             // Orange ambré
    
    // Utilitaires
    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.3)',  // Noir 30% opacité
    shadow: 'rgba(0, 0, 0, 0.1)',   // Noir 10% opacité
  },
  isDark: false,
};
```

### Mode Sombre (Dark Theme)

```typescript
const darkTheme = {
  colors: {
    // Arrière-plans
    background: '#1A253E',          // Bleu marine profond
    backgroundSecondary: '#1F2937', // Gris anthracite
    
    // Principales
    primary: '#1A253E',             // Bleu marine profond
    secondary: '#2563EB',           // Bleu action (identique)
    secondaryLight: '#1E3A8A',      // Bleu foncé
    
    // Textes
    text: '#FFFFFF',                // Blanc
    textSecondary: '#D1D5DB',       // Gris clair
    textMuted: '#9CA3AF',           // Gris moyen
    
    // Bordures
    border: '#374151',              // Gris foncé
    borderLight: '#1F2937',         // Gris très foncé
    
    // Cartes
    card: '#1F2937',                // Gris anthracite
    cardSecondary: '#374151',       // Gris foncé
    
    // États
    success: '#10B981',             // Vert émeraude (identique)
    successLight: '#065F46',        // Vert foncé
    error: '#EF4444',               // Rouge vif (identique)
    warning: '#F59E0B',             // Orange ambré (identique)
    
    // Utilitaires
    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.4)',  // Noir 40% opacité
    shadow: 'rgba(255, 255, 255, 0.1)', // Blanc 10% opacité
  },
  isDark: true,
};
```

---

## Typographie

### Police Poppins

MyLoca utilise exclusivement la police **Poppins** de Google Fonts.

#### Variantes disponibles

```typescript
fonts: {
  regular: 'Poppins-Regular',     // Poids 400 - Texte standard
  medium: 'Poppins-Medium',       // Poids 500 - Texte accentué
  semiBold: 'Poppins-SemiBold',   // Poids 600 - Titres secondaires
  bold: 'Poppins-Bold',           // Poids 700 - Titres principaux
}
```

#### Échelle typographique recommandée

```typescript
const typographyScale = {
  // Titres
  h1: {
    fontSize: 32,
    fontFamily: fonts.bold,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontFamily: fonts.bold,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
  },
  
  // Corps de texte
  body: {
    fontSize: 16,
    fontFamily: fonts.regular,
    lineHeight: 24,
  },
  bodyMedium: {
    fontSize: 16,
    fontFamily: fonts.medium,
    lineHeight: 24,
  },
  
  // Texte secondaire
  caption: {
    fontSize: 14,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
  captionMedium: {
    fontSize: 14,
    fontFamily: fonts.medium,
    lineHeight: 20,
  },
  
  // Petit texte
  small: {
    fontSize: 12,
    fontFamily: fonts.regular,
    lineHeight: 16,
  },
  smallMedium: {
    fontSize: 12,
    fontFamily: fonts.medium,
    lineHeight: 16,
  },
  
  // Boutons
  button: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
};
```

---

## Couleurs spécialisées

### Couleurs des marqueurs de carte

```typescript
// Utilisateur actuel (position de l'utilisateur)
const USER_MARKER_COLOR = '#007AFF'; // Bleu iOS

// Amis (palette vive et distinctive)
const FRIEND_MARKER_COLORS = [
  '#FF6B6B', // Rouge corail
  '#4ECDC4', // Turquoise
  '#45B7D1', // Bleu ciel
  '#96CEB4', // Vert menthe
  '#FFEAA7', // Jaune doux
  '#DDA0DD', // Violet
  '#98D8C8', // Vert eau
  '#F7DC6F', // Jaune doré
  '#BB8FCE', // Lavande
  '#85C1E9', // Bleu clair
  '#F8C471', // Orange doux
  '#82E0AA', // Vert clair
  '#F1948A', // Rose saumon
  '#D7BDE2', // Mauve
  '#A9DFBF', // Vert pastel
];
```

**Note** : La couleur est assignée de façon déterministe à chaque ami basée sur leur userId pour garantir la cohérence.

### Couleurs par tier d'abonnement

```typescript
const TIER_COLORS = {
  PRO_LITE: '#3B82F6',      // Bleu
  PRO_PLUS: '#8B5CF6',      // Violet
  PRO_PREMIUM: '#F59E0B',   // Doré
  ENTERPRISE: '#10B981',    // Vert
};
```

### Couleurs de statut en ligne

```typescript
const statusColors = {
  online: '#10B981',        // Vert - En ligne
  away: '#F59E0B',          // Orange - Absent
  offline: '#6B7280',       // Gris - Hors ligne
  busy: '#EF4444',          // Rouge - Occupé
};
```

---

## Implémentation

### Configuration pour le Web

#### 1. Créer le ThemeContext

```typescript
// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [isDark, setIsDark] = useState(false);

  // Charger la préférence sauvegardée
  useEffect(() => {
    const loadTheme = async () => {
      const saved = localStorage.getItem('themeMode');
      if (saved) {
        setThemeModeState(saved as ThemeMode);
      }
    };
    loadTheme();
  }, []);

  // Déterminer si le thème est sombre
  useEffect(() => {
    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mediaQuery.matches);
      
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      setIsDark(themeMode === 'dark');
    }
  }, [themeMode]);

  // Sauvegarder la préférence
  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    localStorage.setItem('themeMode', mode);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

#### 2. Utiliser le thème dans les composants

```typescript
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { theme } = useTheme();

  return (
    <div style={{
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
      fontFamily: theme.fonts.regular,
    }}>
      <h1 style={{ 
        fontFamily: theme.fonts.bold,
        color: theme.colors.primary,
      }}>
        Titre
      </h1>
      <p style={{ 
        fontFamily: theme.fonts.regular,
        color: theme.colors.textSecondary,
      }}>
        Contenu
      </p>
    </div>
  );
};
```

#### 3. Variables CSS personnalisées (optionnel)

```typescript
// Générer les variables CSS
useEffect(() => {
  const root = document.documentElement;
  
  // Couleurs
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  // Typographie
  Object.entries(theme.fonts).forEach(([key, value]) => {
    root.style.setProperty(`--font-${key}`, value);
  });
}, [theme]);
```

Puis dans votre CSS :

```css
.card {
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: var(--font-regular);
}

.title {
  color: var(--color-primary);
  font-family: var(--font-bold);
}
```

---

## Bonnes pratiques

### ✅ À faire

1. **Toujours utiliser les couleurs du thème**
   ```typescript
   // ✅ Bon
   backgroundColor: theme.colors.card
   
   // ❌ Mauvais
   backgroundColor: '#FFFFFF'
   ```

2. **Utiliser les polices définies**
   ```typescript
   // ✅ Bon
   fontFamily: theme.fonts.semiBold
   
   // ❌ Mauvais
   fontFamily: 'Arial'
   ```

3. **Respecter la hiérarchie des couleurs**
   - `primary` pour les éléments de marque principaux
   - `secondary` pour les actions (boutons, liens)
   - `text` pour le texte principal
   - `textSecondary` pour le texte moins important
   - `textMuted` pour les placeholders et indices

4. **Tester les deux modes**
   - Toujours vérifier que votre interface fonctionne bien en mode clair ET sombre
   - Vérifier le contraste suffisant pour l'accessibilité

5. **Utiliser les couleurs d'état de façon cohérente**
   - `success` pour les confirmations et succès
   - `error` pour les erreurs et validations échouées
   - `warning` pour les avertissements
   - `textMuted` pour les états désactivés

### ❌ À éviter

1. **Hardcoder des couleurs**
   ```typescript
   // ❌ Ne jamais faire
   style={{ color: '#FF0000' }}
   ```

2. **Mélanger différentes polices**
   ```typescript
   // ❌ Incohérent
   fontFamily: 'Helvetica'
   ```

3. **Ignorer le mode sombre**
   - Ne pas tester seulement en mode clair

4. **Utiliser des opacités sur des couleurs sémantiques**
   ```typescript
   // ❌ Problématique
   backgroundColor: theme.colors.success + '80' // opacité codée en dur
   
   // ✅ Mieux
   backgroundColor: theme.colors.successLight
   ```

### 📱 Responsive et accessibilité

1. **Tailles de police minimales**
   - Minimum 14px pour le texte de corps
   - Minimum 12px pour les captions

2. **Contraste**
   - Ratio minimum 4.5:1 pour le texte normal
   - Ratio minimum 3:1 pour le texte large (>18px)

3. **Zones tactiles**
   - Minimum 44x44px pour les éléments interactifs
   - Espacement suffisant entre les éléments cliquables

---

## Exemples d'utilisation

### Bouton primaire

```typescript
const PrimaryButton = ({ label, onPress }: ButtonProps) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onPress}
      style={{
        backgroundColor: theme.colors.secondary,
        color: theme.colors.white,
        fontFamily: theme.fonts.semiBold,
        fontSize: 16,
        padding: '12px 24px',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};
```

### Carte avec information

```typescript
const InfoCard = ({ title, content }: CardProps) => {
  const { theme } = useTheme();
  
  return (
    <div
      style={{
        backgroundColor: theme.colors.card,
        borderRadius: 12,
        padding: 16,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: `0 2px 8px ${theme.colors.shadow}`,
      }}
    >
      <h3
        style={{
          fontFamily: theme.fonts.semiBold,
          fontSize: 18,
          color: theme.colors.text,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: theme.fonts.regular,
          fontSize: 14,
          color: theme.colors.textSecondary,
          lineHeight: 1.5,
        }}
      >
        {content}
      </p>
    </div>
  );
};
```

### Badge de notification

```typescript
const NotificationBadge = ({ count }: { count: number }) => {
  const { theme } = useTheme();
  
  if (count === 0) return null;
  
  return (
    <div
      style={{
        backgroundColor: theme.colors.error,
        color: theme.colors.white,
        fontFamily: theme.fonts.bold,
        fontSize: 12,
        borderRadius: 12,
        minWidth: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 6px',
      }}
    >
      {count > 99 ? '99+' : count}
    </div>
  );
};
```

---

## Support et ressources

### Références

- **Tailwind Colors** : La palette est inspirée de Tailwind CSS pour la cohérence
- **Material Design** : Les principes d'accessibilité suivent les guidelines Material
- **WCAG 2.1** : Respect des standards d'accessibilité niveau AA

### Outils recommandés

- **[Coolors](https://coolors.co/)** : Générateur de palette
- **[Contrast Checker](https://webaim.org/resources/contrastchecker/)** : Vérification du contraste
- **[Google Fonts](https://fonts.google.com/specimen/Poppins)** : Police Poppins

---

**Version** : 1.0.0  
**Dernière mise à jour** : Novembre 2025  
**Auteur** : Équipe MyLoca

