# 📸 Captures d'Écran - MyLoca Web

Cette page présente les captures d'écran de l'application MyLoca Web dans ses différents états.

## 🌞 Mode Clair (Light Theme)

![Mode Clair](../docs/screenshots/myloca-web-light-mode.png)

### Caractéristiques

- **Background** : Gris très clair (#F9FAFB)
- **Sidebar** : Bleu vif (#2563EB)
- **Cartes** : Blanc (#FFFFFF)
- **Texte** : Noir (#1A1A1A)
- **Bordures** : Gris clair (#E5E7EB)

### Éléments Visibles

1. **Sidebar gauche**
   - Logo "M MyLoca"
   - 6 items de menu avec icônes
   - Item "Bookings" actif (fond semi-transparent)
   - Profil utilisateur "John Doe" en bas

2. **Navbar supérieure**
   - Barre de recherche avec placeholder "Rechercher..."
   - Bouton notifications avec badge rouge "3"
   - Toggle thème avec icône lune 🌙

3. **Contenu principal**
   - Titre "Bienvenue sur MyLoca"
   - 3 cartes de statistiques :
     - Réservations : 50 (bleu)
     - Commandes : 32 (vert)
     - Transactions : 128 (orange)
   - Section "Actions rapides" avec 2 boutons

---

## 🌙 Mode Sombre (Dark Theme)

![Mode Sombre](../docs/screenshots/myloca-web-dark-mode.png)

### Caractéristiques

- **Background** : Bleu marine profond (#1A253E)
- **Sidebar** : Bleu vif (#2563EB) - identique
- **Cartes** : Gris anthracite (#1F2937)
- **Texte** : Blanc (#FFFFFF)
- **Bordures** : Gris foncé (#374151)

### Différences avec le Mode Clair

| Élément | Mode Clair | Mode Sombre |
|---------|-----------|-------------|
| Background | #F9FAFB | #1A253E |
| Cartes | #FFFFFF | #1F2937 |
| Texte | #1A1A1A | #FFFFFF |
| Bordures | #E5E7EB | #374151 |
| Toggle icône | 🌙 | ☀️ |

---

## 🎯 Interactions

![Interactions](../docs/screenshots/myloca-web-interactions.png)

### Fonctionnalités Testées

1. **Barre de recherche**
   - Texte saisi : "test recherche"
   - Bordure bleue au focus
   - Placeholder disparaît

2. **Menu hover**
   - Item "Orders" survolé
   - Fond devient transparent
   - Curseur en pointer

3. **États des boutons**
   - Hover : Changement d'opacité
   - Focus : Bordure visible
   - Active : Style maintenu

---

## 🎨 Palette de Couleurs Complète

### Mode Clair

```css
--background: #F9FAFB
--background-secondary: #F3F4F6
--primary: #1A253E
--secondary: #2563EB
--secondary-light: #DBEAFE
--text: #1A1A1A
--text-secondary: #6B7280
--text-muted: #9CA3AF
--border: #E5E7EB
--border-light: #F3F4F6
--card: #FFFFFF
--success: #10B981
--error: #EF4444
--warning: #F59E0B
```

### Mode Sombre

```css
--background: #1A253E
--background-secondary: #1F2937
--primary: #1A253E
--secondary: #2563EB
--secondary-light: #1E3A8A
--text: #FFFFFF
--text-secondary: #D1D5DB
--text-muted: #9CA3AF
--border: #374151
--border-light: #1F2937
--card: #1F2937
--success: #10B981
--error: #EF4444
--warning: #F59E0B
```

---

## 📱 Responsive (À venir)

Les captures d'écran des versions mobiles et tablettes seront ajoutées dans une prochaine version.

### Breakpoints Prévus

- **Mobile** : < 640px
- **Tablette** : 640px - 1024px
- **Desktop** : > 1024px

---

## 🔍 Détails Techniques

### Résolution des Captures

- **Format** : PNG
- **Qualité** : 100%
- **Full Page** : Oui pour les modes clair/sombre
- **Viewport** : 1920x1080

### Outils Utilisés

- Next.js Development Server
- Playwright (browser automation)
- Browser Extension MCP

---

## 📝 Notes

1. Toutes les captures sont prises avec la police **Poppins**
2. Les couleurs respectent strictement la palette définie
3. Le contraste est conforme aux normes WCAG 2.1 (AA)
4. Les effets de hover sont visibles sur les captures d'interactions

---

**Date** : Novembre 2024  
**Version** : 1.0.0  
**Navigateur** : Chrome/Edge (Chromium)

