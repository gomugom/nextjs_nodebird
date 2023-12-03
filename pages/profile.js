import AppLayout from '@/components/AppLayout'
import FollowList from '@/components/FollowList'
import NicknameEditForm from '@/components/NicknameEditForm'
import Head from 'next/head'
import React from 'react'

const profile = () => {
  
  const followingList = [];
  const followerList = [];

  return (
    <AppLayout>
      <Head>
        <title>Node Bird | profile</title>
      </Head>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
      profile
    </AppLayout>
  )
}

export default profile