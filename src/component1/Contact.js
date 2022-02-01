import React from 'react'
const Contact=()=>{
    return(
      <>
      <div className="contactcontainer">
          <div className="contact_inner_container">
             <div className="innercontact_detail">
             <div className="detail">
                     <label htmlFor="">Email</label>
                     <input type="email" placeholder="email"/>
                 </div>
             <div className="detail">
                     <label htmlFor="">Message</label>
                     <input type="email" placeholder="email"/>
                 </div>
             <div className="detail">
                     <label htmlFor="">send</label>
                     <input type="button" placeholder="email"/>
                 </div>
                 
               

             </div>
          </div>
          <div className="contact_inner1_container">
          
                 
                     <p>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolorum ipsa reiciendis facilis doloremque veritatis a, necessitatibus sunt iure quo amet. Rem vitae eaque illo eveniet ducimus! Repudiandae, quam aperiam!
                     </p>
                 

          </div>
      </div>
      </>
    )
}
export default Contact