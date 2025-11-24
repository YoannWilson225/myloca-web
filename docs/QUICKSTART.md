# 🚀 Guide de Démarrage Rapide - MyLoca Web

## Installation et Premier Lancement

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancement du serveur de développement

```bash
npm run dev
```

L'application sera disponible sur **http://localhost:3000**

## 🎯 Ce qui est disponible

### ✅ Composants fonctionnels

#### Sidebar (Barre latérale)
- **Position** : Fixe à gauche (240px)
- **Contenu** :
  - Logo MyLoca
  - 6 items de menu avec icônes
  - Profil utilisateur (John Doe)
- **Interaction** : Effet de survol sur chaque item

#### Navbar (Barre de navigation)
- **Position** : Sticky en haut (72px)
- **Contenu** :
  - Barre de recherche fonctionnelle
  - Bouton notifications avec badge (3)
  - Toggle de thème (🌙/☀️)
- **Interaction** : Focus sur la recherche, hover sur les boutons

#### Système de Thème
- **Mode clair** : Background gris clair (#F9FAFB)
- **Mode sombre** : Background bleu marine (#1A253E)
- **Toggle** : Cliquer sur l'icône en haut à droite
- **Persistence** : Le choix est sauvegardé dans localStorage

### 📋 Menu de Navigation

| Item | Icône | Statut | Description |
|------|-------|--------|-------------|
| My Visits | 📍 | Inactif | Gestion des visites |
| Bookings | 📅 | **Actif** | Gestion des réservations |
| Orders | 🛍️ | Inactif | Gestion des commandes |
| Menu | 📋 | Inactif | Consultation du menu |
| Transactions | 💳 | Inactif | Historique des transactions |
| Settings | ⚙️ | Inactif | Paramètres de l'application |

## 🎨 Test du Système de Thème

### Passer en mode sombre
1. Cliquer sur l'icône 🌙 en haut à droite
2. L'application passe en mode sombre
3. L'icône change pour ☀️

### Revenir en mode clair
1. Cliquer sur l'icône ☀️
2. L'application revient en mode clair
3. L'icône redevient 🌙

### Vérifier la persistence
1. Changer le thème
2. Rafraîchir la page (F5)
3. Le thème choisi est conservé ✅

## 🧪 Tests des Interactions

### Barre de recherche
```
1. Cliquer dans la barre "Rechercher..."
2. La bordure devient bleue (focus)
3. Taper du texte
4. Le texte s'affiche correctement
```

### Boutons de navigation
```
1. Survoler un item du menu
2. Le fond devient légèrement transparent
3. Le curseur devient un pointer
```

### Boutons d'action
```
1. Survoler "Nouvelle réservation"
2. L'opacité change légèrement
3. Idem pour "Voir les rapports"
```

## 📊 Page d'Accueil

### Cartes de Statistiques

| Carte | Valeur | Couleur |
|-------|--------|---------|
| Réservations | 50 | Bleu (#2563EB) |
| Commandes | 32 | Vert (#10B981) |
| Transactions | 128 | Orange (#F59E0B) |

### Actions Rapides

- **Nouvelle réservation** : Bouton primaire (fond bleu)
- **Voir les rapports** : Bouton secondaire (bordure bleue)

## 🔧 Personnalisation

### Modifier le profil utilisateur

Éditer `src/components/Sidebar.tsx` :

```typescript
// Ligne ~74
<div>
  <p style={{ ... }}>
    Votre Nom  // Modifier ici
  </p>
  <p style={{ ... }}>
    votre@email.com  // Modifier ici
  </p>
</div>
```

### Modifier les couleurs

Éditer `src/config/theme.ts` :

```typescript
export const lightTheme: Theme = {
  colors: {
    primary: '#1A253E',     // Modifier cette valeur
    secondary: '#2563EB',   // Modifier cette valeur
    // ... autres couleurs
  }
};
```

### Ajouter un item de menu

Éditer `src/components/Sidebar.tsx` :

```typescript
const menuItems: MenuItem[] = [
  // ... items existants
  { 
    id: 'nouveau-item', 
    label: 'Nouveau', 
    icon: '🆕', 
    active: false 
  },
];
```

## 📱 Points à Développer

### Court terme
- [ ] Ajouter la vraie photo de profil (API utilisateur)
- [ ] Implémenter la recherche fonctionnelle
- [ ] Gérer les clics sur les notifications
- [ ] Router les clics sur les items de menu

### Moyen terme
- [ ] Créer les pages pour chaque section
- [ ] Ajouter l'authentification
- [ ] Connecter à l'API backend
- [ ] Ajouter les formulaires

### Long terme
- [ ] Système de notifications en temps réel
- [ ] Intégration de cartes (géolocalisation)
- [ ] Dashboard avec graphiques
- [ ] Mode responsive mobile

## 🐛 Dépannage

### Le serveur ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les styles ne s'appliquent pas
```bash
# Vérifier que Tailwind est bien configuré
# Vider le cache de Next.js
rm -rf .next
npm run dev
```

### Les imports ne fonctionnent pas
```bash
# Vérifier tsconfig.json
# L'alias @/* doit pointer vers ./src/*
```

## 📚 Documentation Complémentaire

- [Guide d'Implémentation Complet](./IMPLEMENTATION.md)
- [Documentation des Couleurs](./characteristic/01-THEME-ET-COULEURS.md)
- [Changelog](../CHANGELOG.md)
- [README Principal](../README.md)

## 💡 Conseils

1. **Toujours utiliser le thème** : Éviter les couleurs hardcodées
2. **Tester les deux modes** : Vérifier clair ET sombre
3. **Utiliser les polices Poppins** : Respecter la hiérarchie
4. **Suivre l'architecture** : Garder le code modulaire
5. **Documenter les changements** : Mettre à jour CHANGELOG.md

## ✅ Checklist de Vérification

Avant de considérer une fonctionnalité terminée :

- [ ] Fonctionne en mode clair
- [ ] Fonctionne en mode sombre
- [ ] Responsive (si applicable)
- [ ] Aucune erreur console
- [ ] Aucune erreur de linting
- [ ] Code documenté
- [ ] Commits clairs

---

**Besoin d'aide ?** Consultez la documentation ou ouvrez une issue.

**Version** : 1.0.0  
**Dernière mise à jour** : Novembre 2024

