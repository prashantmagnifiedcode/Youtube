import React, { useState } from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";
import { exampleCode, codes, codes1 } from "./codecontent";
import FileBase64 from 'react-file-base64';
import base64 from 'react-file-base64'
import Codeshows from "./Codeshow";
import Contentpart from "./Reactcontent";
import Linuxs from "./linux.js";
import Card from "./card";

const Content = () => {
  const [show, setshow] = useState({ Reactt: false, Linux: false });
  const [imgname,setimgname]=useState("")
  const [name,setname]= useState("SHOW CONTENT")
  
    const [ file, setFile ] = useState(null)
    const [ fileName, setFileName ] = useState(null)
  const uploadfileconnection=async(e)=>{
    e.preventDefault();
     try{

       const data= await fetch("/uploadfile",{
         method:"POST",
         credentials:"include",
         headers:{
           "Content-Type":"application/json"
         }

         
       })
       setimgname(data)
       if(data.status==200){
         
         console.log("done upload successfully")
       }

     }catch(e){console.log(e)}
  }
  
  

  const fileToBase64 = (file, cb) => {
      const filedata= new FileReader()
      filedata.readAsDataURL(file)
      filedata.onload=function(){
        cb(null,filedata.result)
      }
      filedata.onerror=function(){
         cb(null,"something went wrong")
      }
  }

  const onUploadFileChange = ({ target }) => {
     console.log(target)
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    console.log("0")
    fileToBase64(target.files[0], (err, result) => {
      console.log("2")
      console.log(result)
      if (result) {
        setFile(result)
        setFileName(target.files[0])
      }
    })
  }
  //console.log({file})
  return (
    <>
    <div className="content1"> 

      <div className="content">
        <div className="headercontent">
          <h5>Amazing Content(Crystal Clear)</h5>
        </div>
        <div className="videocontent">
          <div className="youtubev">
            <div className="video">
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/WtospDD4uIQ"
              />
            </div>
            <div className="description">
              <p>
                It will fill you entirely with thrill and
                code............................... #coding attraction ........
              </p>
            </div>
          </div>
          <div className="youtubev">
            <div className="video">
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/Ox_yLW8P38g"
              />
            </div>
            <div className="description">
              <p>
                The Fantastic designed Music player using the pure HTML CSS
                javascript
              </p>
            </div>
          </div>
          <div className="youtubev">
            <div className="video">
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/e0fz0vix7FU"
                />
            </div>
            <div className="description">
              <p>
                Youtube clone application Deploying on Expo , Now available for
                downloading process
              </p>
            </div>
          </div>
        </div>
        <div className="showbutton">
          <div>React js content</div>

          <Button
            className="showcontentbutton"
            onClick={() => setshow({ ...show, Reactt: !show.Reactt })}
          >
            {show.Reactt?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Linux Commands</div>

          <Button
            className="showcontentbutton"
            onClick={() => setshow({ ...show, Linux: !show.Linux })}
            >
            {show.Linux?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>React Native</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Next JS</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Python</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Docker</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>...</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        {show.Reactt ? <Contentpart /> : null}
        {show.Linux ? <Linuxs /> : null}
      
        <div className="fileupload" >
        <FileBase64
          type="file"
          multiple={false}
          
          onDone={({ base64 }) => setimgname(base64)}
        />
         <img style={{ width: '100%', height: 300 }} src={imgname} />    
         
      <div className="upload-area">
        { fileName && <p className="filename">{fileName.name}</p> }
        <input  className="upload-area-choose" type="file" name="filetobase" onChange={onUploadFileChange} accept=".pdf" />
      </div>
      <div className="upload-area">
        { fileName && <p className="filename">{fileName.name}</p> }
        <input  className="upload-area-choose" type="file" name="filetobase" onChange={onUploadFileChange} accept=".pdf" />
      </div>
      <br/>
      {file ? <textarea id="base64File" rows="30" cols="150" value={file} ></textarea> : null }
    </div>
        

        <div className="contentfooter">
         
            Prashant Srivastava
          
        </div>
     
      </div>
            </div>
    </>
  );
};
export default Content;
