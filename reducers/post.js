export const initialState = {
    mainPosts: [
        {
            id:1,
            User: {
                id: 1,
                nickname: 'gomugom'
            },
            content: 'n번째 게시글',
            Images: [
                {
                    src: 'https://s.pstatic.net/static/www/mobile/edit/20231201_1095/upload_1701406315239m2bwu.png',
                },
                {
                    src: 'https://s.pstatic.net/static/www/mobile/edit/20231201_1095/upload_1701406315239m2bwu.png',
                },
                {
                    src: 'https://s.pstatic.net/static/www/mobile/edit/20231201_1095/upload_1701406315239m2bwu.png',
                }
            ],
            Comments: [
                {
                    User: {
                        nickname: 'hero',
                    },
                    content: 'haha',
                },
                {
                    User: {
                        nickname: 'gomugom',
                    },
                    content: 'hoho',
                }
            ],
        }
    ],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';

export const addPostAction = {
    type: ADD_POST,
}

const dummyPost = {
    id:2,
    User: {
        id: 2,
        nickname: 'gomugom'
    },
    content: '두번째 게시글',
    Images: [
        {
            src: 'https://s.pstatic.net/static/www/mobile/edit/20231201_1095/upload_1701406315239m2bwu.png',
        },
        {

            src: 'https://s.pstatic.net/static/www/mobile/edit/20231201_1095/upload_1701406315239m2bwu.png',
        },
        {
            src: 'https://s.pstatic.net/static/www/mobile/edit/20231201_1095/upload_1701406315239m2bwu.png',
        }
    ],
    Comments: [
        {
            User: {
                nickname: 'hero',
            },
            content: 'haha',
        },
        {
            User: {
                nickname: 'gomugom',
            },
            content: 'hoho',
        }
    ],
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                // 새로 추가되는 데이터가 위로 오기 위해 앞에 넣어줘야함
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
}

export default postReducer;