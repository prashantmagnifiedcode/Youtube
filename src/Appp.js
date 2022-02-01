import React, { useState } from 'react'
const App=()=>{

    const [changedata,setchangedata]=useState({
        name:"",
        phone:"",
        number:"",
        password:""

    })
    const inputtest=(event)=>{
      let name=event.target.name
      let value= event.target.value
      setchangedata({...changedata,[name]:value})
    }
    const submits=async(e)=>{
        const{name,phone,password,number}=changedata;
        e.preventDefault()
        const data= await fetch("https://todolist-5b09d-default-rtdb.firebaseio.com/tododata.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,phone,password,number})
        })
        

    }
    return(
        <>
        <div className="container">
        <form method="POST">
            <div className="name">
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={changedata.name} id="name" onChange={inputtest}/>
            </div>
            
            <div className="name">
            <label htmlFor="">phone</label>
                <input type="phone" name="phone" id="phone"value={changedata.phone} onChange={inputtest}/>
            </div>
            <div className="name">
            <label htmlFor="">Number</label>
                <input type="nuber" name="number" id="number" value={changedata.number} onChange={inputtest} />
            </div>
            <div className="name">
            <label htmlFor="">password</label>
                <input type="password" name="password" id="password" value={changedata.password} onChange={inputtest} />
            </div>
            <button onClick={submits}>submit</button>
        </form>
        </div>
        </>
    )
}
export default App;