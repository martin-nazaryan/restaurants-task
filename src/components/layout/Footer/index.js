import React from 'react';
import { Layout, Typography } from 'antd';

import './style.scss';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => (
  <Footer>
    <Text type="warning">Footer</Text>
  </Footer>

);

export default AppFooter;
