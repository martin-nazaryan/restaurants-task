import React from 'react';
import PropTypes from 'prop-types';
import { StarOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

const Stars = ({ onRate }) => {
  const data = [1, 2, 3, 4, 5];

  return (
    <Space direction="vertical">
      <div>
        {data.map((item) => (
          <Button key={item} onClick={() => onRate(item)}>
            <StarOutlined />
          </Button>
        ))}
      </div>
    </Space>
  );
};

Stars.propTypes = {
  onRate: PropTypes.func.isRequired,
};

Stars.defaultProps = {
  rate: null,
};

export default Stars;
