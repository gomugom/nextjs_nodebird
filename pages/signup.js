import AppLayout from '@/components/AppLayout'
import useInput from '@/hooks/useInput'
import { Button, Checkbox, Form, Input } from 'antd'
import Head from 'next/head'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const signup = () => {

  // value랑 onChange를 합친 custom hook 으로 간편하게 처리
  const [id, onChangeId] = useInput('');
  const [pwd, onChangePwd] = useInput('');
  
  const [userNickname, onChangeNickname] = useInput('');
  const [pwdError, setPwdError] = useState(false);

  const [confirmPwd, setConfirmPwd] = useState('');
  const onChangeConfirmPwd = useCallback((e) => {
    setConfirmPwd(e.target.value);
    setPwdError(pwd !== confirmPwd);
  }, []);

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked); // checkbox 값 : e.target.checked
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if(pwd !== confirmPwd) {
      return setPwdError(true);
    }
    if(!term) return setTermError(true);
  }, [pwd, confirmPwd, term]);

  return (
    <AppLayout>
      <Head>
        <title>Node Bird | 회원가입</title>
      </Head>
      <Form onFinish={onSubmit}> 
        <div>
          <label htmlFor='user-id'>아이디</label>
          <br/>
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor='user-nickname'>닉네임</label>
          <br/>
          <Input name="user-nickname" value={userNickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor='user-pwd'>비밀번호</label>
          <br/>
          <Input name="user-pwd" value={pwd} required onChange={onChangePwd} />
        </div>
        <div>
          <label htmlFor='user-confirm-pwd'>비밀번호 확인</label>
          <br/>
          <Input name="user-confirm-pwd" value={confirmPwd} required onChange={onChangeConfirmPwd} />
          {
            pwdError && <ErrorMsg style={{color:'red'}}>비밀번호가 일치하지 않습니다.</ErrorMsg>
          }
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
          {
            termError && <ErrorMsg>약관에 동의하셔야합니다.</ErrorMsg>
          }
        </div>
        <div style={{marginTop: 10}}>
          <Button type='primary' htmlType='submit'>가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  )
}

const ErrorMsg = styled.div`
  color: red;
`

export default signup