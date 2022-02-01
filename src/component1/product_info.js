import React ,{useEffect}from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import Footer from './footer'
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
const Product_indi_info = (props) => {
  const [data, setdata] = useState(props.location.state.props);
  const [height,width]=useWindowSize()
  const history = useHistory();
  return (
    <>
      <div className="full_description">
        <div className="full_header">{data.title} "13"</div>
        <div className="prize">
          <div className="prize1">
            <h3> From ₹ {data.prize}*</h3>
            <p>
              The Apple M1 chip gives the 13‑inch MacBook Pro speed and power
              beyond belief. With up to 2.8x CPU performance. Up to 5x the
              graphics speed. Our most advanced Neural Engine for up to 11x
              faster machine learning. And up to 20 hours of battery life so you
              can go all day. It’s our most popular pro notebook, taken to a
              whole new level.
            </p>
          </div>
        </div>
        <div className="full_image">
          <p>
            Magic Keyboard lets you do everything faster and more efficiently.
            The refined scissor mechanism delivers a responsive, comfortable and
            quiet typing experience. The Touch Bar puts the commands you need
            most right where you need them, saving time and keystrokes. And
            Touch ID provides fast, easy authentication for secure logins.
          </p>
        </div>

        <div className="full_image_container_outside">
          <div className="full_image_container_outside_container2">
         
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  width:width<500?width-70:(width/2)-200,
                  height:height/2,
                  src: data.imgUrl,
                },
                largeImage: {
                  src: data.imgUrl,
                  width: 1200,
                  height: 1400,
                },
                shouldUsePositiveSpaceLens: true,
              }}
            />
          </div>

          <div className="full_image_container_outside_container1">
            <h6>Different View</h6>
            <div>
            <div  className="full_image_container_inside" >

              <img src={data.imgUrl} alt="" srcset="" height="100%" width="100%" />
            </div>
            <div className="full_image_container_inside"  >

              <img src={data.imgUrl} alt="" srcset="" height="100%" width="100%"  />
            </div>
            <div className="full_image_container_inside"  >

              <img src={data.imgUrl} alt="" srcset="" height="100%" width="100%"  />
            </div>

            </div>
       

          </div>
        </div>

        <div
          style={{
            color: "black",
            margin: "10px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h2>Choose your new MacBook Pro.</h2>
          <div>
            <h6>13-{data.title}</h6>
            <h6>14-{data.title}</h6>
            <h6>16-{data.title}</h6>
          </div>
        </div>
        <div className="full_detail_about">
          <div className="full_detail_container1">
            <img src={data.imgUrl} alt="" srcset="" />

            <div className="full_detail_small_image">
              <h2>
                Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 512GB SSD Storage¹
              </h2>
              <p>* * * * * * * * * *  4.3</p>
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
              </p>
              <h2>From ₹16818.00/mo. Per Monthwith EMI,Footnote**</h2>
              <strike>₹{data.prize}‡</strike>
              <Button onClick={() => history.push("/Purchase-section")}>
                Shop Now>
              </Button>
            </div>
          </div>

          <div className="full_detail_container1">
            <img src={data.imgUrl} alt="" srcset="" />

            <div className="full_detail_small_image">
              <h2>
                Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 512GB SSD Storage¹
              </h2>
              <p>* * * * * * * * * *  4.3</p>
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
              </p>
              <h2>From ₹16818.00/mo. Per Monthwith EMI,Footnote**</h2>
              <strike>₹{data.prize}‡</strike>
              <Button onClick={() => history.push("/Purchase-section")}>
                Shop Now>
              </Button>
            </div>
          </div>

         
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Product_indi_info;
