const closestatus=true;
const Chat_status=(state=closestatus,action)=>{
  switch (action.type) {
      case 'close':
          return action.payload;
   
      default:
          return state;
  }   
}

export default Chat_status