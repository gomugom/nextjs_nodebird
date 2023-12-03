import { Button, Card, List } from 'antd'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { StopOutlined } from '@ant-design/icons'

const FollowList = ( {header, data} ) => {

    // 객체를 직접 style에 넣지말라 객체는 계속 다르게 인식되어서 계속 rerendering발생됨
    const listMarginBtmStyle = useMemo(() => {marginBottom: 20}, []);
    const listGridStyle = useMemo(() => {
        return {gutter:4, xs: 2, md: 3};
    }, []);
    const listLoadMoreStyle = useMemo(() => ({textAlign: 'center', margin: '10px 0'}), []);
    const listItemMarginTopStyle = useMemo(() => ({marginTop: 20}), []);

  return (
    <div>
        <List 
            style={listMarginBtmStyle}
            grid={listGridStyle}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={listLoadMoreStyle}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={{marginTop: 20}}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    </div>
  )
}

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default FollowList