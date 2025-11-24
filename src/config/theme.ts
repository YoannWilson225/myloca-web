// Configuration des thèmes clair et sombre de MyLoca
import { Theme } from '@/types/theme';

export const lightTheme: Theme = {
  colors: {
    // Arrière-plans
    background: '#F9FAFB',
    backgroundSecondary: '#F3F4F6',
    
    // Principales
    primary: '#1A253E',
    secondary: '#2563EB',
    secondaryLight: '#DBEAFE',
    
    // Textes
    text: '#1A1A1A',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',
    
    // Bordures
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    
    // Cartes
    card: '#FFFFFF',
    cardSecondary: '#F9FAFB',
    
    // États
    success: '#10B981',
    successLight: '#D1FAE5',
    error: '#EF4444',
    warning: '#F59E0B',
    
    // Utilitaires
    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.3)',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  fonts: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
  isDark: false,
};

export const darkTheme: Theme = {
  colors: {
    // Arrière-plans
    background: '#1A253E',
    backgroundSecondary: '#1F2937',
    
    // Principales
    primary: '#1A253E',
    secondary: '#2563EB',
    secondaryLight: '#1E3A8A',
    
    // Textes
    text: '#FFFFFF',
    textSecondary: '#D1D5DB',
    textMuted: '#9CA3AF',
    
    // Bordures
    border: '#374151',
    borderLight: '#1F2937',
    
    // Cartes
    card: '#1F2937',
    cardSecondary: '#374151',
    
    // États
    success: '#10B981',
    successLight: '#065F46',
    error: '#EF4444',
    warning: '#F59E0B',
    
    // Utilitaires
    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.4)',
    shadow: 'rgba(255, 255, 255, 0.1)',
  },
  fonts: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
  isDark: true,
};

