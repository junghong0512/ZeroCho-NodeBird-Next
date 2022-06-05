import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Input, Menu, Row, Col } from 'antd';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    {
      label: (
        <Link href='/'>
          <a>Home</a>
        </Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link href='/profile'>
          <a>Profile</a>
        </Link>
      ),
      key: 'profile',
    },
    {
      label: <SearchInput />,
      key: 'search',
    },
    {
      label: (
        <Link href='/signup'>
          <a>Signup</a>
        </Link>
      ),
      key: 'signup',
    },
  ];

  return (
    <div>
      <Menu mode='horizontal' items={menuItems} />
      <Row gutter={4}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='https://github.com/junghong0512'
            target='_blank'
            rel='noreferrer noopener'
          >
            MY GITHUB
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
