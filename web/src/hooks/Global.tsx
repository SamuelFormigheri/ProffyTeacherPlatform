import React from 'react';
import {AuthProvider} from './AuthContext';
import {ToastProvider} from './ToastContext';
import { ThemeProvider } from './ThemeContext';

const GlobalProvider: React.FC = ({children}) => {
  return (
    <ThemeProvider>
      <AuthProvider>       
          <ToastProvider>
            {children}
          </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default GlobalProvider;