import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image, Space, Typography, Row, Col, List, Form, Input, Divider, Button,
} from 'antd';

import { fakeData } from '../../../helpers';
import { leaveComment, setRestaurant, rate } from '../../../store/ducks/restaurants';
import Stars from '../../reusable/Stars/Index';

import './style.scss';

const { Title, Text } = Typography;

const RestaurantPage = () => {
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurantsReducer.restaurant);
  const user = useSelector((state) => state.usersReducer.user);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fakeData.getRestaurant(+params.id);
        dispatch(setRestaurant(res));
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const onFinish = async (values) => {
    dispatch(leaveComment(restaurant.key, user.username, values.comment));
  };

  const onRate = async (value) => {
    dispatch(rate(restaurant.key, user.username, value));
  };

  const getRating = () => {
    if (!user) return;

    const rating = restaurant && restaurant.ratings.find((r) => r.username === user.username);
    return (rating && rating.rate) || 0;
  };

  return (
    restaurant ? (
      <Row gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      >
        <Col span={8}>
          <Space direction="vertical">
            <Image src={restaurant.image} width={200} />
            <Title level={2}>{restaurant.title}</Title>
            <Text type="secondary">{restaurant.description}</Text>

            <Divider />

            <Form name="control-hooks" onFinish={onFinish}>
              <Form.Item name="comment" rules={[{ required: true }]}>
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Leave a comment
                </Button>
              </Form.Item>
            </Form>

            <Stars onRate={onRate} />

            <Text>
              Your rate is:
              {' '}
              {getRating()}
            </Text>

          </Space>
        </Col>
        <Col span={16}>
          <Title level={2}>Users comments</Title>
          <List
            itemLayout="horizontal"
            dataSource={restaurant.comments}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.username}
                  description={item.comment}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    ) : (
      <h1>Loading...</h1>
    )
  );
};

export default RestaurantPage;
