import React from 'react'
import 'antd/dist/antd.css'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import Link from 'next/link'
import Search from 'antd/lib/transfer/search'

// _app.js는 전체 공통 레이아웃이라 생각하면됨(시작지점이면서 전체 공통), AppLayout.js는 특정 컴포넌트에서 공통으로 사용할 레이아웃 정의
const NodeBirdApp = ({Component}) => {
 
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
        <Head>
            <title>Node Bird</title>
        </Head>
        <main>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href='/'>Node Bird</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/profile'>프로필</Link>
                </Menu.Item>
                <Menu.Item>
                  <Search placeholder="input search text" onSearch={onSearch} enterButton style={{verticalAlign:'middle'}} />
                </Menu.Item>
                <Menu.Item>
                    <Link href='/signup'>회원가입</Link>
                </Menu.Item>
            </Menu>
            <div>
                <Component />
            </div>
        </main>
    </div>
  )

}

NodeBirdApp.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default NodeBirdApp