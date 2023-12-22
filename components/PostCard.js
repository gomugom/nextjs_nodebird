import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons'
import { Avatar, Button, Card, Comment, List, Popover } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import PostImages from './PostImages'
import CommentForm from './CommentForm'

const PostCard = ({ post }) => {

    // const { me } = useSelector((state) => state.user);

    console.log('PostCard ===============>>>');
    console.log(post);

    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const id = useSelector((state) => state.user.me?.id); // state.user.me && state.user.me.id

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    // const id = me?.id; // me && me.id 랑 동일함

  return (
    <>
        <Card
            cover={post?.Images[0] && <PostImages images={post?.Images} />}
            actions={[
                <RetweetOutlined key="retweet" />,
            
                liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onclick={onToggleLike} /> 
                    : <HeartOutlined key="heart" />

                ,
                <MessageOutlined key="message" onClick={onToggleComment}/>,
                <Popover key="more" content={(
                    <Button.Group>
                        {
                            // id가 있고 id랑 게시글 id가 같은경우
                            id && (id === post?.User.id) ? (
                                <>
                                    <Button>수정</Button>
                                    <Button type='danger'>삭제</Button>
                                </>
                            ) : <Button>신고</Button> 
                        }
                        
                    </Button.Group>
                )}>
                    <EllipsisOutlined />
                </Popover>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>{post?.User.nickname[0]}</Avatar>}
                title={post?.User.nickname}
                description={post?.content}
            />
        </Card>
        {
            commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout='horizontal'
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                                    
                            </li>
                        )}
                    />
                </div>
            )
        }
    </>
  )
}

PostCard.propTypes = {
    post: PropTypes.shape({ // object 내부도 자세히 정의할 때 shape이용
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired
}

export default PostCard;