import React from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
const Footer=()=>{
    return (
        <>
         <div className="footercontainer">
            <div className="footer_innercontainer1">
                <div className="benefit">
                    <MonetizationOnIcon style={{transform: 'scale(2)' ,margin:"5px 0px",color:"#25CFCF"}}/>
                    <h3>Free Delivery</h3>
                    <p>Buy Online and get free no-contact deleivery</p>
                </div>
                <div className="benefit">
                    <QuestionAnswerIcon style={{transform: 'scale(2)',margin:"5px 0px" , color:"#25CFCF"}}/>
                    <h3>Free Delivery</h3>
                    <p>Buy Online and get free no-contact deleivery</p>
                </div>
            </div>
          <div className="footer_innercontainer1">

                        <div class="f_inside1">
						<div class="f_inside2">
							<h4 class="f_title">Information</h4>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Delivery Information</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms  Conditions</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
                        </div> 

                        <div class="f_inside1">
						<div class="f_inside2">
							<h4 class="f_title">Information</h4>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Delivery Information</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms  Conditions</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
                        </div> 
                        <div class="f_inside1">
						<div class="f_inside2">
							<h4 class="f_title">Information</h4>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Delivery Information</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms  Conditions</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
                        </div> 
                        <div class="f_inside1">
						<div class="f_inside2">
							<h4 class="f_title">For Latest Update</h4>
							<input type="email" name="" id="" placeholder="Email" />
						</div>
                        </div> 


          </div>
                
              

             <div className="footer_innercontainer2">
             
							<p class="copyright_text text-center">© 2022 Designed By Prashantsrivastava@coder</p>
						
             </div>
         </div>
        </>
    )
}
export default Footer;