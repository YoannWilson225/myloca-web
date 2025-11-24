# 📱 MyLoca Web - Documentation d'Implémentation

## 🎯 Vue d'ensemble

MyLoca Web est une application de gestion de locations développée avec Next.js 16, React 19 et TypeScript. L'application suit les spécifications de design définies dans les documents de caractéristiques.

## 🏗️ Structure du Projet

```
myloca-web/
├── app/                      # Pages Next.js (App Router)
│   ├── layout.tsx           # Layout racine avec ThemeProvider
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Sidebar.tsx      # Barre latérale de navigation
│   │   ├── Navbar.tsx       # Barre de navigation supérieure
│   │   ├── MainLayout.tsx   # Layout principal (Sidebar + Navbar)
│   │   └── index.ts         # Exports centralisés
│   ├── context/
│   │   └── ThemeContext.tsx # Context pour la gestion du thème
│   ├── config/
│   │   └── theme.ts         # Configuration des thèmes clair/sombre
│   └── types/
│       └── theme.ts         # Types TypeScript pour le thème
├── docs/                    # Documentation
│   ├── characteristic/      # Spécifications du design
│   └── model/              # Maquettes et modèles
└── config/
    └── constant.ts         # Constantes de l'application
```

## 🎨 Système de Thème

### Fonctionnalités

- ✅ **Mode clair/sombre** : Basculement manuel avec sauvegarde de la préférence
- ✅ **Mode système** : Suit automatiquement le thème du système d'exploitation
- ✅ **Persistence** : Sauvegarde dans localStorage
- ✅ **Variables CSS dynamiques** : Mise à jour automatique lors du changement de thème

### Utilisation du Thème

```typescript
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { theme, isDark, setThemeMode } = useTheme();
  
  return (
    <div style={{ 
      background: theme.colors.card,
      color: theme.colors.text,
      fontFamily: theme.fonts.regular,
    }}>
      <button onClick={() => setThemeMode(isDark ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## 🎭 Composants Principaux

### 1. Sidebar

**Localisation** : `src/components/Sidebar.tsx`

**Fonctionnalités** :
- Logo de l'application
- Menu de navigation avec 6 sections :
  - My Visits
  - Bookings (actif par défaut)
  - Orders
  - Menu
  - Transactions
  - Settings
- Profil utilisateur en bas avec photo et informations

**Style** :
- Couleur de fond : `theme.colors.secondary` (Bleu #2563EB)
- Largeur fixe : 240px
- Position fixe à gauche

### 2. Navbar

**Localisation** : `src/components/Navbar.tsx`

**Fonctionnalités** :
- Barre de recherche globale avec icône
- Bouton de notifications avec badge de compteur
- Toggle de thème (clair/sombre) avec icône dynamique

**Style** :
- Hauteur : 72px
- Position sticky (reste visible au scroll)
- Bordure inférieure pour séparer du contenu

### 3. MainLayout

**Localisation** : `src/components/MainLayout.tsx`

**Fonctionnalités** :
- Combine Sidebar et Navbar
- Gère le positionnement et l'espacement
- Fournit la structure de base pour toutes les pages

## 🎯 Typographie

**Police** : Poppins (Google Fonts)

**Variantes disponibles** :
- **Regular (400)** : Texte standard
- **Medium (500)** : Texte accentué
- **SemiBold (600)** : Titres secondaires
- **Bold (700)** : Titres principaux

**Échelle typographique** :
- H1 : 32px / Bold
- H2 : 24px / Bold
- H3 : 20px / SemiBold
- H4 : 18px / SemiBold
- Body : 16px / Regular
- Caption : 14px / Regular
- Small : 12px / Regular

## 🎨 Palette de Couleurs

### Mode Clair

```typescript
background: '#F9FAFB'       // Gris très clair
primary: '#1A253E'          // Bleu marine profond
secondary: '#2563EB'        // Bleu action
text: '#1A1A1A'            // Noir quasi-pur
success: '#10B981'         // Vert émeraude
error: '#EF4444'           // Rouge vif
warning: '#F59E0B'         // Orange ambré
```

### Mode Sombre

```typescript
background: '#1A253E'       // Bleu marine profond
primary: '#1A253E'          // Bleu marine profond
secondary: '#2563EB'        // Bleu action
text: '#FFFFFF'            // Blanc
success: '#10B981'         // Vert émeraude
error: '#EF4444'           // Rouge vif
warning: '#F59E0B'         // Orange ambré
```

## 🚀 Démarrage

### Pré-requis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

### Production

```bash
npm run build
npm start
```

## 📦 Dépendances Principales

- **Next.js 16** : Framework React avec App Router
- **React 19** : Bibliothèque UI
- **TypeScript 5** : Typage statique
- **Tailwind CSS 4** : Framework CSS utilitaire

## 🎯 Prochaines Étapes

1. **Authentification** : Implémenter le système d'authentification utilisateur
2. **Pages** : Créer les pages pour chaque section du menu
3. **API** : Configurer les appels API vers le backend
4. **États** : Implémenter la gestion d'état (Context API ou Zustand)
5. **Formulaires** : Créer les formulaires de création/édition
6. **Cartes** : Intégrer le système de carte pour la géolocalisation
7. **Responsive** : Optimiser pour mobile et tablette
8. **Tests** : Ajouter les tests unitaires et e2e

## 🔧 Bonnes Pratiques

### Utilisation des Couleurs

```typescript
// ✅ Bon
style={{ background: theme.colors.card }}

// ❌ Mauvais
style={{ background: '#FFFFFF' }}
```

### Utilisation des Polices

```typescript
// ✅ Bon
style={{ fontFamily: theme.fonts.semiBold }}

// ❌ Mauvais
style={{ fontFamily: 'Arial' }}
```

### Structure des Composants

```typescript
'use client'; // Toujours en haut pour les composants interactifs

import { useTheme } from '@/context/ThemeContext';

export const MyComponent = () => {
  const { theme } = useTheme();
  
  return (
    // JSX avec styles themés
  );
};
```

## 📞 Support

Pour toute question ou problème, consultez :
- Documentation des couleurs : `docs/characteristic/01-THEME-ET-COULEURS.md`
- Modèles de design : `docs/model/model1.jpeg`

---

**Version** : 1.0.0  
**Date** : Novembre 2024  
**Équipe** : MyLoca

