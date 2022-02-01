import React ,{useState}from "react";
import imgs from "./iStock-1164946738-scaled.jpg";
const Detail = () => {
  const [state_name, setstate_name] = useState({Name:'',Email:'',Phone:'',Amount:''})
  
  // taking input word
  const type_word=(e)=>{
  
        let  name= e.target.name;
        let value=e.target.value;
        setstate_name({...state_name,[name]:value})

  }
  const Submit_payment=async(e)=>{
    e.preventDefault()
    
    try{
      console.log("car",state_name)
     const{Name,Email,Phone,Amount}=state_name
      const data= await fetch('/paynow',{
      method:"POST",
      credentials:'include',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({Name,Email,Phone,Amount})
      })
      console.log(data)

      
      if(data.status===200){

        console.log("succ")

      }else{
        console.log('not_successful')
      }

   }catch(e){console.log(e)}
  }
  const Acquire_payment_data=async()=>{
    try{
      const data= await fetch('/callback',{
        method:"GET",
        credentials:'include',
        headers:{"Content-Type":"application/json"},
        
        })
  
        
        if(data.status===200){
  
          console.log("succe")
  
        }else{
          console.log('not successful')
        }

    }catch(e){
    console.log(e)
    }
  }
  return (
    <>
      <div className="detail-container11">
        <div className="detailcontainer">
          <div className="detailcontainer2">
            <img
              className="detail_container_image"
              src="https://www.revieyou.com/wp-content/uploads/2020/09/Online-Payment-Method-1024x683.jpg"
              alt=""
              srcset=""
              
            />
          </div>

          <div className="detail_full_information">
            <form className="" >
              <div className="form-grou">
                <label for="">Name: </label>
                <input type="text" name="Name" value={state_name.Name} onChange={type_word} />
              </div>
              <div className="form-grou">
                <label for="">Email: </label>
                <input type="text" name="Email" value={state_name.Email} onChange={type_word} />
              </div>
              <div className="form-grou">
                <label for="">Phone: </label>
                <input type="text" name="Phone" value={state_name.Phone} onChange={type_word} />
              </div>
              <div className="form-grou">
                <label for="">Amount: </label>
                <input type="text" name="Amount" value={state_name.Amount} onChange={type_word} />
              </div>
              <div className="form-grou">
                <button className="btn form-control btn-primary" onClick={Submit_payment}>
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
