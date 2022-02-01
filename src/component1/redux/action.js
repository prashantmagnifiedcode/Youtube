
 const Chatbox_close_state=(data)=>{
     
     return {type:"close",payload:data}
}
 const Chatbox_open=(data)=>{
     
     return {type:"open",payload:data}
}
 const How_login_chat=(data)=>{
     
     return {type:"login",data}
}
export default Chatbox_close_state
export {Chatbox_open}


