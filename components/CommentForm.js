import useInput from '@/hooks/useInput';
import { Button, Form, Input } from 'antd'
import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({post}) => {

    const [commentText, onChangeCommentText] = useInput('');

    const id = useSelector((state) => state.user.me?.id);

    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    }, [commentText]);

  return (
    <div>
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position: 'relative', margin: 0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button  type="primary" htmlType='submit'>삐약</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired
}

export default CommentForm