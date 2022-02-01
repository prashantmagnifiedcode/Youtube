const state1=false;
const Chat_status1=(state=state1,action)=>{
  switch (action.type) {

      case 'open':
         return action.payload
      default:
          return state;
  }   
}
export default Chat_status1