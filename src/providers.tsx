import { ReactNode } from 'react';
import ThemeProvider from './contexts/ThemeContext';
import LangProvider from './contexts/langContext';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <LangProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LangProvider>
  );
};

