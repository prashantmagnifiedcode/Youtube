import React,{useState} from 'react'
import Navbar from './navbar'
import './componentstyle.css'
import Card from './informationcard';
import Footer from './footer';
import Contact from './Contact'
import Wavefooter from './wavefooter'
import Qrcod from './Qrcode'
import Chat from './chat'
import Chatbox from './chatbox'
import { NavLink } from "react-router-dom";
import Chat_login from './chat_login'
import Chatbox_close_state from './redux/action.js';
import Attractive from './attractive'
import {useSelector,useDispatch} from 
'react-redux'
const Mainfile=()=>{

      const states = useSelector(state => state. Chat_status)
   const states1 = useSelector(state => state. Chat_status1)
   
   const dispatch= useDispatch()
   console.log(states)
      let name="/detail"   
    return(
        <>
         
         <Attractive/>
        

          <Card brand="Lenove" on/>
          
          
         
          { states?  
          <div className="chatcontainer"
          onClick={()=>dispatch(Chatbox_close_state(false))}          >
             <Chat/>
                       </div>:null
         
        }
          {!states? <Chat_login/> :null}
         {states1?<Chatbox/>:null}

         <Footer/>
        

         
 
          
        </>
    )
}
export default Mainfile;








// import React,{useState} from 'react'
// import Navbar from './navbar'
// import './componentstyle.css'
// import Card from './informationcard';
// import Footer from './footer';
// import Contact from './Contact'
// import Wavefooter from './wavefooter'
// import Qrcod from './Qrcode'
// import Chat from './chat'
// import Chatbox from './chatbox'
// import { NavLink } from "react-router-dom";
// import Chat_login from './chat_login'
// import Chatbox_close_state from './redux/action.js';
// import Attractive from './attractive'
// import {useSelector,useDispatch} from 
// 'react-redux'

// const Mainfile=()=>{
//    const states = useSelector(state => state. Chat_status)
//    const states1 = useSelector(state => state. Chat_status1)
   
//    const dispatch= useDispatch()
//    console.log(states)
//       let name="/detail"
      
//     return(
//         <>
//          {/* <Navbar/> */}
//          <Attractive/>
       
//           {/* <div className="Allcards ">
          
//           <Card/>
//           <Card/>
//           <Card/>
       

         
//           </div> */}
//           {/* <Contact/> */}
//               {/* <Wavefooter/> */}
//          {/* <Footer/> */}
         
//       { states?  
//          <div className="chatcontainer"
//          onClick={()=>dispatch(Chatbox_close_state(false))}
//          >
//              <Chat/>
             
//          </div>:null
         
//          }
//          {!states? <Chat_login/> :null}
//          {states1?<Chatbox/>:null}
         
         
// {/*        
//              <Qrcod/> */}
          
//         </>
//     )
// }
// export default Mainfile;