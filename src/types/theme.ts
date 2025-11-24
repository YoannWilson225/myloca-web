// Types pour le système de thème de MyLoca

export interface ThemeColors {
  // Couleurs d'arrière-plan
  background: string;
  backgroundSecondary: string;
  
  // Couleurs principales
  primary: string;
  secondary: string;
  secondaryLight: string;
  
  // Couleurs de texte
  text: string;
  textSecondary: string;
  textMuted: string;
  
  // Bordures et séparateurs
  border: string;
  borderLight: string;
  
  // Cartes et surfaces
  card: string;
  cardSecondary: string;
  
  // États et feedback
  success: string;
  successLight: string;
  error: string;
  warning: string;
  
  // Utilitaires
  white: string;
  black: string;
  overlay: string;
  shadow: string;
}

export interface ThemeFonts {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
  isDark: boolean;
}

export type ThemeMode = 'system' | 'light' | 'dark';

