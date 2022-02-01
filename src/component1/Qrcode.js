import React,{useState,useEffect} from 'react'
import QRCodes from 'qrcode';
const Qrcod=()=>{
    const [qrcode_data,setqrcode_data]=useState()
    const [links,setlinks]=useState()
    useEffect(async() => {
     
        try{
            const qr_data= await QRCodes.toDataURL("desing by prashant srivastava ")
            console.log(qr_data)
            setlinks(qr_data)
        }catch(e){
            console.log(e)
        }

    }, [])
   

    return(
        <>
        <div className="qrcode">
            <div className="qrcode1">

     <img src={links} alt="" srcset=" "  />
            </div>
            <div className="qrcode2">

                <p>
                   Full Detail of compand Provided in bar code
                </p>
            </div>
            

        </div>
        
        </>
    )
}
export default Qrcod;