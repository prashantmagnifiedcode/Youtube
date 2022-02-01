import React from 'react'
import ReactPlayer from "react-player";
import Menu from './menu'
const Card=()=>{
    const playlist=[
        {id:1,
         link:"https://www.youtube.com/watch?v=VKkexj6ecM0"
        },
        {id:2,
         link:"https://youtu.be/1Mda6K11YBU"
        },
        {id:3,
         link:"https://youtu.be/Mbz8Gox1YJk"
        },
        {id:4,
         link:"https://youtu.be/mvgRsyQYWMo"
        },
        {id:5,
         link:"https://www.youtube.com/watch?v=VKkexj6ecM0"
        },
        {id:6,
         link:"https://youtu.be/1Mda6K11YBU"
        },
        {id:7,
         link:"https://youtu.be/Mbz8Gox1YJk"
        },
        {id:8,
         link:"https://youtu.be/mvgRsyQYWMo"
        },
        {id:9,
         link:"https://www.youtube.com/watch?v=VKkexj6ecM0"
        },
        {id:10,
         link:"https://youtu.be/1Mda6K11YBU"
        },
        {id:11,
         link:"https://youtu.be/Mbz8Gox1YJk"
        },
        {id:12,
         link:"https://youtu.be/mvgRsyQYWMo"
        },
    ]
    return(
        <>
       
        <div className="video_container">
            {
                playlist.map((e)=>{
                    return(
                        <>
                       <div className="video_card">
                        <ReactPlayer
                        key={e.id}
                        height="30vh"
                        width="100%"
                        url={e.link}
                      />
                        

                       </div>

                        
                        </>
                    )
                })
            }
            </div>
   
  
        
        </>
    )
}
export default Card
