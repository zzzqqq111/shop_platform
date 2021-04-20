const initialState = {
    userInfo: {},
    projectId: 0
}

export default function userInfo(state = initialState, action){
    switch(action.type){
        case 'test': {
            return {
                ...action.user_info
            }
        }
        case 'test': {
            return {
                ...action.user_info
            }
        }
        default: return state
    }
}