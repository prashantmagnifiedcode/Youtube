import { combineReducers } from "redux"
import Chat_status from  './chatbox_state'
import Chat_status1 from  './chatbox_status1'
import Chat_login_data from  './login_data'
const rootreducer= combineReducers({Chat_status,Chat_status1,Chat_login_data})
export default rootreducer
 