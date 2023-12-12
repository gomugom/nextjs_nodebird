import { logoutAction } from '@/reducers/user';
import { Avatar, Button, Card, Form, Input } from 'antd'
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';

const UserProfile = () => {

    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        // setIsLoggedIn(false);
        dispatch(logoutAction({}))
    }, []);

  return (
    <div>
        <Card
            actions={[
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="follwer">팔로워<br/>0</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>ZC</Avatar>}
                title="YoungRong"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>        
    </div>
  )
}

export default UserProfile