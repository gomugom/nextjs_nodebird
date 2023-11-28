import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types';
import { Col, Menu, Row } from 'antd';

const AppLayout = ({ children }) => {
    
  return (
    <div>
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