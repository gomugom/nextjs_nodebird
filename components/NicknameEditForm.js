import { Input } from 'antd'
import Form from 'antd/lib/form/Form'
import React, { useMemo } from 'react'

const NicknameEditForm = () => {

    // style은 변하지 않는 '값'이니까 useMemo로 최적화(아니면 styled-components로), props로 전달되는 메서드는 useCallback으로 최적화
    const style = useMemo(() => {
        return {
            marginBottom: '20px',
            border: '1px solid #d9d9d9',
            padding: '20px'
        }
    }, []);

  return (
    <div>
        <Form style={style}>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </Form>
    </div>
  )
}

export default NicknameEditForm