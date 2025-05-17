import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Frame, AppProvider } from '@shopify/polaris';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Instructions from './pages/Instructions';
import Support from './pages/Support';
import Settings from './pages/Settings';
import '@shopify/polaris/build/esm/styles.css';

// Define the App component with proper typing
const App: React.FC = () => {
  // Define custom theme with Web3 Diagnostics colors (dark navy #141B2F and gold #e3a620)
  const theme = {
    colors: {
      surface: '#FFFFFF',
      onSurface: '#212B36',
      background: '#F6F6F7',
      interactive: '#e3a620',
      secondary: '#e3a620',
      primary: '#e3a620',
      critical: '#D82C0D',
      warning: '#FFC453',
      highlight: '#e3a620',
      success: '#008060',
      decorative: '#e3a620',
      borderSubdued: '#141B2F20',
      border: '#141B2F40',
      icon: '#141B2F',
      text: '#141B2F'
    },
    colorScheme: 'light'
  };

  return (
    <AppProvider theme={theme} i18n={{}}>
      <Router>
        <Frame navigation={<Navigation />}>
          {/* Logo is now in each page, we don't need it here */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Frame>
      </Router>
    </AppProvider>
  );
};

export default App;
