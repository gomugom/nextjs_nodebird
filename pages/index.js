import AppLayout from '@/components/AppLayout'
import PostCard from '@/components/PostCard'
import PostForm from '@/components/PostForm'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const { isLoggedIn } = useSelector((state) => state.user);

  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      <Head>
        <title>Node Bird | Home</title>
      </Head>
      <div>
       { isLoggedIn && <PostForm />}

       {
        mainPosts.map((post, index) => <PostCard key={post.id} post={post} />)
       }
      </div>
    </AppLayout>
  )
}

export default Home

