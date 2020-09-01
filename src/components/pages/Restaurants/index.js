import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Table } from 'antd';
import { Link } from 'react-router-dom';

import { setRestaurants } from '../../../store/ducks/restaurants';
import { fakeData } from '../../../helpers';

import './style.scss';

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (image) => <Image src={image} width={100} />,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (title, { key }) => <Link to={`/${key}`}>{title}</Link>,
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render: (title, { ratings }) => (ratings.reduce((a, b) => (a + b.rate), 0) / ratings.length),
  },
];

const RestaurantsPage = () => {
  const dispatch = useDispatch();

  const restaurants = useSelector((state) => state.restaurantsReducer.restaurants);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fakeData.getRestaurants();
        dispatch(setRestaurants(res));
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <Table dataSource={restaurants} columns={columns} />
  );
};

export default RestaurantsPage;
