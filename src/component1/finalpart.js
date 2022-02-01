import React,{useState} from "react";

import Button from "@material-ui/core/Button";
import ReactImageMagnify from 'react-image-magnify';
import { useHistory } from "react-router-dom";
import Detail from './detail.js';
import Payment from './payment'
const Final_Purchase = () => {
    const history=useHistory()
    const [state, setstate] = useState(false)
  return (
    <>
      <div className="purchase_product_all_container">
        <div className="purchase_product_full_detail_about">
          <div className="purchase_product_full_detail_container2">
            {/* <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1632948896000"
              alt=""
              srcset=""
            /> */}
            <ReactImageMagnify 
            {...{
             
              
              smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:"https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06924906_intel_evo_icon.png"
    },
    largeImage: {
        src: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06924906_intel_evo_icon.png",
        width: 1200,
        height: 1400
    },
    shouldUsePositiveSpaceLens: true
}} />
          </div>

          <div className="purchase_product_full_detail_container1">
            <h2>Customise your 13‑inch MacBook Pro - Space Grey</h2>
            <p>
              Apple M1 chip with 8‑core CPU, 8‑core GPU and 16‑core Neural
              Engine 8GB unified memory 512GB SSD storage 33.74 cm (13.3-inch)
              Retina display with True Tone Backlit Magic Keyboard - US English
              Touch Bar and Touch ID Two Thunderbolt / USB 4 ports
            </p>
            <div className="purchase_inner_detail">
              <div className="purchase_product_details">
                <h3>Memory</h3>
                <div className="memory">8GB unified memory</div>
                <div className="memory">
                  16GB unified memory
                  <h5>+ ₹20000.00</h5>
                </div>
              </div>
              <div className="purchase_product_details">
                <h3>Storage</h3>
                <div className="memory">512GB SSD storage</div>
                <div className="memory">
                  1TB SSD storage
                  <h5>+ ₹20000.00</h5>
                </div>
                <div className="memory">
                  2TB SSD storage
                  <h5>+ ₹20000.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='button'>
            <Button onClick={()=>setstate(true)}>PayMent</Button>
            
        </div>


        
      </div>
      {state?
      <Detail/>:null}
      
    </>
  );
};
export default Final_Purchase;
