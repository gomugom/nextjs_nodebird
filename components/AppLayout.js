import Link from 'next/link'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';

const AppLayout = ({ children }) => {

  // react-redux : react와 redux연결 값이 바끼면 자동으로 rerendering됨
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {
              isLoggedIn ? <UserProfile /> : <LoginForm />
            }
          </Col>
          <Col xs={24} md={12}>
            {children}  
          </Col>
          <Col xs={24} md={6}>
            
          </Col>
        </Row>
        
    </div>
  )

}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout