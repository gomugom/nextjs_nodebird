import useInput from '@/hooks/useInput';
import { addPostAction } from '@/reducers/post';
import { Button, Input } from 'antd';
import Form from 'antd/lib/form/Form'
import React, { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const PostForm = () => {

    const { imagePaths } = useSelector((state) => state.post);

    const dispatcher = useDispatch();

    const imgRef = useRef();

    const handleClick = useCallback(() => {
        imgRef.current.click();
    }, [imgRef.current]);

    const [text, setText] = useState('');

    const onChangeText = useCallback((e) => {setText(e.target.value);}, []);

    const handleSubmit = useCallback(() => {
        console.log('handleSubmit');
        dispatcher(addPostAction);
        setText('');
    }, []);

  return (
    <>
        <Form style={{margin: '10px 0 20px'}} encType='multipart/form-data' onFinish={handleSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={148} placeholder='신기한 일이 있었나요?' />
            <input type="file" multiple hidden ref={imgRef} />
            <Button onClick={handleClick}>이미지 업로드</Button>
            <Button type='primary' style={{float: 'right'}} htmlType='submit'>짹짹</Button>
        </Form>
        <div>
            {
                imagePaths.map((e) => (
                    <div key={e} style={{display: 'inline-block'}}>
                        <img src={e} style={{width: '200px'}} alt={e} />
                        <Button>제거</Button>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default PostForm