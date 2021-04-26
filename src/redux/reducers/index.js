// reducer入口
import { combineReducers } from 'redux'
import shop from './shop'
import user from './user'
import address from './address'

export default combineReducers({
    shop,
    user,
    address
})