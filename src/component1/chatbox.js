import React, { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import Message from "./message";


import { useSelector,useDispatch } from "react-redux";
import ReactScrollToBottom from "react-scroll-to-bottom";
import {Chatbox_open} from './redux/action';

import Chatbox_close_state from './redux/action';
let user="prahsn"
let socket;
const Chatbox=()=>{
    const [id, setid] = useState("");
    const [messagess, setmessagess] = useState([]);
    const [add, setadd] = useState([...messagess,messagess.userjoin]);
    
    
    const whatsappstate= useSelector((state)=>state.changewhatsapp)
const dispatchnew= useDispatch()
    
    const send = () => {

      const message = document.getElementById("user-msg").value;
      socket.emit("message", { message, id });
      document.getElementById("user-msg").value = " "};
    
    
    
    useEffect(() => {
      const ENDPOINT = "http://localhost:8000"
      
     socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      alert("Connected");
      setid(socket.id);});
    socket.on("welcomes", (data) =>
    {
    setmessagess([...messagess, data])
    }
    );
    socket.on("left", (data) =>{
          setmessagess([...messagess,data ])
    }
     
    );
    socket.emit("joined",user);
    
    return () => {
      
      socket.emit("disconnected");
      socket.off();
    };
    }, [])
    
    useEffect(() => {
      
      socket.on("receivedmessage", (data) => {
        setmessagess([...messagess, data]);
        
      });
    
      return () => {
        socket.off();
      };
    }, [messagess]);
  

    // closing  both login and chatbox function
    const total_close_chatbox=()=>{
      dispatchnew(Chatbox_open(false))
    dispatchnew(Chatbox_close_state(true))
    }
    return(
        <>
        <div className="chatbox">
        <main>
        <header>
            <div className="title">
                
                <h5>P.P.S Industrial Products</h5>
            </div>
            <h6 onClick={()=>{total_close_chatbox()
              
              
              }} style={{cursor:"pointer",fontSize:"15px"}}>close</h6>     
        </header>
        <div className="container">
            <div className="user-window">
                <h3>𝔭𝔢𝔯𝔰𝔬𝔫 𝔧𝔬𝔦𝔫𝔢𝔡</h3>
              
                <div className="users-list">
                  
                {add.map((item, i) =>{
                  return <p key={i}>{item}</p>
                 
                })}
              
                </div>
            </div>
            <div className="chat-window">
            <div className="chats">
                    <ReactScrollToBottom className="scrollpart">  
                    

                {messagess.map((item, i) => (
                    <Message
                    user={item.id === id ? "" : item.user}
                message={item.message}
                classs={item.id === id ? "outgoing" : "incoming"}
                key={i}
                />
                ))}
                
                </ReactScrollToBottom>
                </div>
                <div className="user-input">
                <textarea type="text" id="user-msg" ></textarea>
                    
                    <button  type='button'id="user-send" onClick={()=>send()}>send</button>
                </div>
            </div>
        </div>

    </main>
        </div>
        </>
    )
}
export default Chatbox;