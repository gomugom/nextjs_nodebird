import { Button, Form, Input } from 'antd'
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const LoginForm = ({setIsLoggedIn}) => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // component에 prop로 넘기는 함수는 useCallback을 꼭 쓰자(최적화 위해서)
  const onChangeId = useCallback((e) => {
      setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
      setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    // onFinish는 preventDefault()가 이미 구현되어있음
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <div>
      <FormWrapper onFinish={onSubmitForm}>
          <div>
              <label htmlFor='user-id'>아이디</label>
              <br/>
              <Input name="user-id" value={id} onChange={onChangeId} required />
          </div>
          <div>
              <label htmlFor='user-password'>비밀번호</label>
              <br/>
              <Input name="user-password" value={password} onChange={onChangePassword} required />
          </div>
          {/* style에 객체를 넣으면 객체끼리 비교하면 같은 객체가 아니라 바끼지 않아도 이부분을 계속 랜더링함으로 객체 절대 넣으면 안됨 */}
          {/* styled-component같은걸로 대체하라 */}
          <ButtonWrapper>
              <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
              <Link href='/signup'>회원가입</Link>
          </ButtonWrapper>
      </FormWrapper>
    </div>
  )
}

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired
}

const ButtonWrapper = styled.div`
  marginTop: 10px;
`

const FormWrapper = styled(Form)`
  padding: 5px;
`

export default LoginForm