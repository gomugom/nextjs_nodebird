import Link from 'next/link'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';
import LoginForm from './LoginFOrm';
import UserProfile from './UserProfile';

const AppLayout = ({ children }) => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {
              isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>
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