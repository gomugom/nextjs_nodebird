const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
        data,
    }
}

// changeNickname('gomugom');

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case "LOG_IN":
            return { // 바끼지 않는 부분은 메모리참조해 최적화하고 전체적으론 새로운 객체를 할당해 새로 리랜더링 될 수 있도록 함
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }
        default:
            return{
                ...state,
            }
    }

}

export default rootReducer;