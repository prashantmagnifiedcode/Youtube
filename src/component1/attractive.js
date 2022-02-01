import React, { useEffect,useRef ,useState} from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloseIcon from '@material-ui/icons/Close';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';
import Button from "@material-ui/core/Button";
function useWindowSize(){
    const [table1Size, table1SizeSet] = useState([window.innerHeight,window.innerWidth])
    useEffect(() => {
        const handler=()=>{
        table1SizeSet([window.innerHeight,window.innerWidth])
        }
        window.addEventListener('resize',handler)
    
    }, [])
    return table1Size
}
const Attractive=()=>{
    const [height,width]=useWindowSize()
    const [st,setst]=useState(true)
    const openmenu=(cls)=>{
        
        return(
            <>
        <ul>
               <li> <NavLink  className={cls} to="/">HOME</NavLink></li>
               <li><NavLink className={cls} to="/signin">Contact</NavLink></li>
               <li><NavLink className={cls} to="/detail">Detail</NavLink></li>
               
           
           {st?null:<CloseIcon onClick={()=>setst(true)}/>}
           </ul>
            </>
        )
   
         
    }
    return(
     <>
        <div className="laptopcontainer">
       <div className="laptopnavbar">
          { st?<img src="https://www.apple.com/v/macbook-pro-13/j/images/overview/m1_eyebrow__fxvza4sqyfma_large.png" alt="" srcset="" />:null}
           


           {width<630&&st?<MenuIcon onClick={()=>setst(false)}/>:null}
           {st&&width>630?openmenu('a'):null}
           {   
               st?null:openmenu('a')
           }
           

       </div>
       <div className="laptopcontentof_navbar">
           <h4>Prashant Srivastva</h4>
           <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt itaque nulla qui, beatae expedita quia nesciunt placeat obcaecati ipsa, cupiditate iste incidunt sed ab quaerat? Id nam vel quis unde.
           </p>
       </div>
       

    </div>
     <div className="laptopfootercontact">
         <div className="laptopfooter_containd_item">
             <div className="laptopfacebook"
            //  style={{background:"blue"}}
             >
                   <i class="fa fa-facebook facebook-awesome-social awesome-social fa-2x"></i>
             </div>
             <div className="laptopfacebook  " >
             <i class="fa fa-youtube youtube-awesome-social awesome-social fa-2x"></i>
             </div>
          
             <div className="laptopfacebook"
             
             >
              <i class="fa fa-linkedin awesome-social fa-2x"></i>
             </div>
             <div className="laptopfacebook"
             
             >
                 <i class="fa fa-twitter awesome-social fa-2x"></i>
             </div>
            
         </div>
     </div>
     
   <div className="discribecard">

     <div class="difcards">
        <i><h1>offfer</h1></i>
        <p>
        <ul>
                  <li>lorem th lorem </li>
                  <li> chip with 8-core CPU, 8-core GPU and 16-core Neural
                Engine 8GB</li>
                  <li> chip with 8-core CPU, 8-core GPU and 16-core Neural
                Engine 8GB</li>
                  <li> chip with 8-core CPU, 8-core GPU and 16-core Neural
                Engine 8GB</li>
                </ul>
            <dfn>s</dfn>
        </p>
        <div className='difcardsinside'>
            <Button>buy</Button>
            <Button>descirn</Button>
        </div>

    </div>
     
   </div>
     
{/* 
    <div className="laptoplastfooter">
        <h5>Firecoder@prashantsrivastva||copywrite by Firecoder</h5>
    </div> */}
     </>

    )
}

export default Attractive;