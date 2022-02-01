import React, {  useState ,useEffect,createContext,useReducer} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Whatsapp from './whatapp'
import Menu from "../ownweb/Menu";
import "react-toastify/dist/ReactToastify.css";
import "../slide.css";

import { useSelector,useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
let user;

export const createcontexts= createContext()

const Slideshow = () => {
useEffect(() => {
  AOS.init();
}, [])
  
const datastate= useSelector((state)=>state.changecookies)
const whatsappstate= useSelector((state)=>state.changewhatsapp)
const dispatchnew= useDispatch()

  const [acquiredata, setacquiredata] = useState({
    name: "",
    password: "",
    address: "",
    phone: "",
    subscribeemail: "",
    email: "",
  });
  const images = [
    "https://p.motionelements.com/stock-video/business/me11031707-group-young-mixed-race-people-working-laptops-office-wooden-4k-a0077.jpg",
    "https://www.colourbox.com/preview/25798348-multiethnic-group-of-happy-business-people-working-with-laptop-computer-in-office.jpg",

    "https://www.yourblogtoday.com/wp-content/uploads/2020/07/AdobeStock_358648139-blog.png",
  ];

  const zoomOutProperties = {
    scale: 0.3,
  };

  const sendEmail = async(e)=> {
    e.preventDefault()
    
    try {
      const {name,password,address,phone,email} = acquiredata;
      
      if(!name,!password,!address,!phone,!email){
        window.alert("Fill all credential correctly")
      }else{
        user= name;
              
        const data = await fetch("/register",{ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({name,password,address,phone,email}) });
        
           
    
        if (data.status === 200) {
          window.alert("successful")
          setacquiredata({name: "",password: "",address: "",phone: "",email: ""})
        }else{
      window.alert(" n")
    }
  }
       
      
    }catch (e){ console.log(e); }

  };
  const sendcookie = async()=> {
    
    
    try {
      const name=true;
              
        const data = await fetch("/acceptcookie",{ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({name}) });
        
        if (data.status === 200) {
         
          dispatchnew({type:"cookies",payload:false})
        } 
    
      }catch(e){console.log(e)}
}

  

  const subscribedsend = async(event) => {
    event.preventDefault()
    const {subscribeemail} = acquiredata;
    try {
      if(!subscribeemail){
        window.alert("Fill all credential correctly")
      }else{
   const data =fetch("/register",{ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({subscribeemail}) });
        if (data.status == 422&&!data) {
      window.alert(" done")
    }else{  
      setacquiredata({subscribedsend:" "})
      window.alert("successful")
    }
  } 
    }catch (e){ console.log("wrong"); }

  };

  let name, value;
  const inputdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setacquiredata({ ...acquiredata, [name]: value });
  };

  useEffect(async() => {
    try{


      const data= await fetch("https://prashantsrivastavacoder.blogspot.com/"); 
           if(data){
             alert("connnect");
           }else{

            alert("not")
           }
      
    }catch(e){console.log(e)}
  }, [])
  useEffect(() => {

 
    if ('speechSynthesis' in window) {
      // Speech Synthesis supported 🎉
      var msg = new SpeechSynthesisUtterance();
      msg.text = "welcome to firecoder Best content is only here";
      window.speechSynthesis.speak(msg);
     }else{
       // Speech Synthesis Not Supported 😣
       alert("Sorry, your browser doesn't support text to speech!");
     }

  }, [1])
  

  return (
    <>
  
      <div className="slide-container ">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => {
            return (
              <div key={index} className="slidetop">
                <div className="slide">
                  <a href="https://www.facebook.com/" >
                    {" "}
                    <div className="slideinner"></div>{" "}
                  </a>

                  <a
                    href="https://www.instagram.com"
                    className="slideinner"
                  ></a>

                  <a
                    href="https://www.youtube.com/channel/UCkXcf809xRx-4IBKQjjBlEA "
                    className="slideinner"
                    ></a>
                </div>
                <Menu />
                <img
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  src={each}
                />
              </div>
            );
          })}
        </Zoom>
      </div>
      {
        whatsappstate?null:<div className="whatsup">
        <i className="fa fa-whatsapp " style={{"font-size":"60px","color":"green"}} onClick={()=>dispatchnew({type:"whatsapp",payload:true})}></i>
             </div>
      }
 
      <div className="containers" >
        <div className="containers1"  data-aos-easing="ease-in-out">
          <div className="about">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="containerform">
            <form action="POST" onSubmit={sendEmail}>
              <div className="forms">
                <div className="form2 form-outline" >
                  <label htmlFor="" data-aos="slide-right"  data-aos-offset="20" data-aos-duration="2000">Name</label>
                  <input
                  data-aos="slide-left"  data-aos-offset="28" data-aos-duration="2000"
                    value={acquiredata.name}
                    onChange={inputdata}
                    type="text"
                    name="name"
                    
                  />
                </div>
                <div className="form2">
                  <label htmlFor="" data-aos="slide-right"  data-aos-offset="20" data-aos-duration="2000">Phone</label>
                  <input
                  data-aos="slide-left"  data-aos-offset="28" data-aos-duration="2000"
                    value={acquiredata.phone}
                    onChange={inputdata}
                    type="phone"
                    name="phone"
                 
                  />
                </div>
                <div className="form2">
                  <label htmlFor="" data-aos="slide-right"  data-aos-offset="20" data-aos-duration="2000">Adress</label>
                  <input
                  data-aos="slide-left"  data-aos-offset="28" data-aos-duration="2000"
                    value={acquiredata.address}
                    onChange={inputdata}
                    type="text"
                    name="address"
                 
                  />
                </div>
                <div className="form2">
                  <label htmlFor="" data-aos="slide-right"  data-aos-offset="20" data-aos-duration="2000">Password</label>
                  <input
                  data-aos="slide-left"  data-aos-offset="28" data-aos-duration="2000"
                    value={acquiredata.password}
                    onChange={inputdata}
                    type="password"
                    name="password"
                 
                    />
                </div>
                <div className="form2">
                  <label htmlFor="" data-aos="slide-right"  data-aos-offset="20" data-aos-duration="2000">Email</label>
                  <input
                  data-aos="slide-left"  data-aos-offset="28" data-aos-duration="2000"
                    value={acquiredata.email}
                    onChange={inputdata}
                    type="email"
                    name="email"
                    
                    />
                </div>
                <div className="form2">
                  <label htmlFor="" data-aos="slide-right"  data-aos-offset="20" data-aos-duration="2000"></label>

                  <input
                  data-aos="slide-left"  data-aos-offset="28" data-aos-duration="2000"
                    type="Submit"
                    placeholder="send"
                  
                     
                    onKeyPress={(e) => (e.key === "Enter" ? sendEmail() : null)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
         <div className="thought">
           <div  className="thoughtnote">
             <p>
                hello the world to workd in ww
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum qui corporis et perferendis! A cumque nihil nulla laboriosam vitae dolorem? Omnis dicta suscipit accusamus et, quos eaque eum voluptatem?

             </p>

           </div>


         </div>

      <footer className=" text-center footerbottom">
        <div className="container p-2 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <label className="form-label" for="form5Example2">
                    Email
                  </label>
                </div>

                <div className="col-md-5 col-10 ">
                  <div className="form-outline mb-4">
                    <input
                      value={acquiredata.subscribeemail}
                      onChange={inputdata}
                      name="subscribeemail"
                      type="email"
                      id="form5Example2"
                      className="form-control footerbottom"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-primary mb-4"
                    onKeyPress={(e) =>
                      e.key === "Enter" && acquiredata.subscribeemail != " "
                        ?subscribedsend() 
                        : null
                    }
                    >
                    Subscribe(Latest Notification)
                  </button >
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="text-center p-3  footerbottom">
          © 2020 Copyright:
          <a className="text-dark" href="/">
            Prashant Srivastava
          </a>
        </div>
      </footer>
   {datastate?<section className="cookies">
        <div>
          This website uses cookies in order to offer you
          the most relevant information  .Please accept cookies for optimal performance
        </div>
        <Button onClick={()=>sendcookie() }>yes ,i accept cookies</Button>
        <Button onClick={()=>dispatchnew({type:"cookies",payload:false})}>no ,need of cookies</Button>
      </section>:null}
{whatsappstate?<Whatsapp/>:null}

                    

    </>
  );
};

export default Slideshow;
export {user}