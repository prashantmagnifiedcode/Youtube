const initial={whatsappnumber:'',email:''}
const Chat_login_data=(state=initial,action)=>{
  switch (action.type) {
      case 'login':
          return action.payload;
   
      default:
          return state;
  }   
}

export default Chat_login_data