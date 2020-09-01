import React from 'react';
import { Layout, Typography } from 'antd';

import './style.scss';

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => (
  <Header>
    <Text type="warning">Header</Text>
  </Header>

);

export default AppHeader;
