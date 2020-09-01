import React from 'react';
import { Layout } from 'antd';

import AppContent from './Content';
import AppHeader from './Header';
import AppFooter from './Footer';

import './style.scss';

const AppLayout = () => (
  <Layout className="app-layout">
    <AppHeader />
    <Layout className="app-layout-content">
      <AppContent />
    </Layout>
    <AppFooter />
  </Layout>
);

export default AppLayout;
