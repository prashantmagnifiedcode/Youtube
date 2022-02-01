import React from 'react'

import {useSelector,useDispatch} from 'react-redux';
import {Chatbox_open} from './redux/action';
import {How_login_chat} from './redux/action';
const Chat_login=()=>{
    
  
    const dispatch= useDispatch()
    return(
        <>
        <div className="chat_login_container">
            <div className="chat_login_innercontainer1">
               <div className="chat_login_innercontainer3">
                   <label htmlFor="email">Email</label>
               <input type="email" name="" 
               placeholder="Email"
               id="" />
               
               </div>
               <div className="chat_login_innercontainer3">
                   <label htmlFor="phone">Whatsapp Contact</label>
               <input type="phone" name="" 
               placeholder="Whatsapp_contact"
               id="" />

               </div>
               <div className="chat_login_innercontainer3">
                   <label htmlFor="phone" 
                   onClick={()=>dispatch(Chatbox_open(true))} 
                   >Login_Chat</label>
            

               </div>
            </div>

        </div>
        </>

    )
}
export default Chat_login