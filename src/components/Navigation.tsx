import React, { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigation as PolarisNavigation } from '@shopify/polaris';
import { HomeMajor, QuestionMarkMajor, ChatMajor, SettingsMajor } from '@shopify/polaris-icons';

const Navigation = (): ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check which path is currently active
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <PolarisNavigation
      location="/"
    >
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px 0',
        background: '#141B2F',
        borderBottom: '1px solid rgba(227, 166, 32, 0.5)'
      }}>
        <img 
          src="/images/web3.png" 
          alt="Web3 Diagnostics logo" 
          style={{ height: '40px' }}
        />
      </div>
      <PolarisNavigation.Section
        items={[
          {
            url: '/',
            label: 'Home',
            icon: HomeMajor,
            selected: isActive('/'),
            onClick: () => {navigate('/'); return false;}
          },
          {
            url: '/instructions',
            label: 'Instructions',
            icon: QuestionMarkMajor,
            selected: isActive('/instructions'),
            onClick: () => {navigate('/instructions'); return false;}
          },
          {
            url: '/support',
            label: 'Support',
            icon: ChatMajor,
            selected: isActive('/support'),
            onClick: () => {navigate('/support'); return false;}
          },
          {
            url: '/settings',
            label: 'Settings',
            icon: SettingsMajor,
            selected: isActive('/settings'),
            onClick: () => {navigate('/settings'); return false;}
          }
        ]}
      />
    </PolarisNavigation>
  );
};

export default Navigation;
