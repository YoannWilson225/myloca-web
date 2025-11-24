# 📱 MyLoca Web

Application web de gestion de locations développée avec Next.js, React et TypeScript.

![MyLoca Web](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)

## 🎯 Aperçu

MyLoca Web est une application moderne de gestion de locations avec une interface utilisateur élégante et intuitive. Elle offre :

- ✅ **Interface moderne** avec Sidebar et Navbar
- ✅ **Thème dynamique** (clair/sombre) avec persistence
- ✅ **Typographie Poppins** professionnelle
- ✅ **Design responsive** et accessible
- ✅ **Architecture modulaire** et maintenable

## 🚀 Démarrage rapide

### Pré-requis

- Node.js 18+ 
- npm, yarn ou pnpm

### Installation

```bash
# Cloner le dépôt
git clone <repository-url>
cd myloca-web

# Installer les dépendances
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 🏗️ Architecture

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
│   │   └── MainLayout.tsx   # Layout principal
│   ├── context/
│   │   └── ThemeContext.tsx # Gestion du thème
│   ├── config/
│   │   └── theme.ts         # Configuration des thèmes
│   └── types/
│       └── theme.ts         # Types TypeScript
└── docs/                    # Documentation
    ├── characteristic/      # Spécifications du design
    ├── model/              # Maquettes
    └── IMPLEMENTATION.md   # Guide d'implémentation
```

## 🎨 Fonctionnalités

### Sidebar
- Logo de l'application
- Navigation avec 6 sections (My Visits, Bookings, Orders, Menu, Transactions, Settings)
- Profil utilisateur avec photo et informations

### Navbar
- Barre de recherche globale
- Notifications avec badge de compteur
- Toggle de thème (clair/sombre)

### Système de thème
- Mode clair et mode sombre
- Basculement manuel avec sauvegarde
- Variables CSS dynamiques
- Transition fluide

## 🎯 Technologies

- **Next.js 16** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Poppins** - Police Google Fonts

## 📚 Documentation

- [Guide de Thème et Couleurs](docs/characteristic/01-THEME-ET-COULEURS.md)
- [Guide d'Implémentation](docs/IMPLEMENTATION.md)
- [Modèles de Design](docs/model/)

## 🎨 Palette de couleurs

### Mode Clair
- **Background**: `#F9FAFB` (Gris très clair)
- **Primary**: `#1A253E` (Bleu marine)
- **Secondary**: `#2563EB` (Bleu action)
- **Text**: `#1A1A1A` (Noir)

### Mode Sombre
- **Background**: `#1A253E` (Bleu marine)
- **Primary**: `#1A253E` (Bleu marine)
- **Secondary**: `#2563EB` (Bleu action)
- **Text**: `#FFFFFF` (Blanc)

## 🔧 Scripts disponibles

```bash
npm run dev      # Démarrer en mode développement
npm run build    # Créer un build de production
npm start        # Démarrer en mode production
npm run lint     # Exécuter le linter
```

## 📝 Prochaines étapes

- [ ] Authentification utilisateur
- [ ] Pages pour chaque section du menu
- [ ] Intégration API backend
- [ ] Gestion d'état avancée
- [ ] Formulaires de création/édition
- [ ] Système de carte pour géolocalisation
- [ ] Optimisation responsive mobile
- [ ] Tests unitaires et e2e

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est la propriété de MyLoca.

---

**Version** : 1.0.0  
**Date** : Novembre 2024  
**Équipe** : MyLoca
