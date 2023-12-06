import React from 'react'
import 'antd/dist/antd.css'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import Link from 'next/link'
import Search from 'antd/lib/transfer/search'
import styled from 'styled-components'
import wrapper from '@/store/configureStore'
import wrapper2 from '@/store/configureStore2'

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
                  <SearchInput placeholder="input search text" onSearch={onSearch} enterButton />
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

// styled안쓸거면 객체 달라서 리랜더링되는 문제위해 useMemo 사용해서 구현하자
// useCallback : 함수를 캐싱, useMemo : 값을 캐싱
const SearchInput = styled(Search)`
    verticalAlign: middle
`

export default wrapper.withRedux(NodeBirdApp);