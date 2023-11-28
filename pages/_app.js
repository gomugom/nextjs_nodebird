import React from 'react'
import 'antd/dist/antd.css'
import Head from 'next/head'
import PropTypes from 'prop-types'

// _app.js는 전체 공통 레이아웃이라 생각하면됨(시작지점이면서 전체 공통), AppLayout.js는 특정 컴포넌트에서 공통으로 사용할 레이아웃 정의
const NodeBirdApp = ({Component}) => {
 
  return (
    <>
        <Head>
            <title>Node Bird</title>
        </Head>
        <div>
            {<Component />}
        </div>
    </>
  )
}

NodeBirdApp.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default NodeBirdApp