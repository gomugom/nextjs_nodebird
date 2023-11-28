import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';

const AppLayout = ({ children }) => {
    
  return (
    <div>
        <Menu mode='horizontal'>
          <Menu.Item>
            <Link href="/">Node Bird</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="profile">프로필</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="signup">회원가입</Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>

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