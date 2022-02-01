import React from "react";
import imgs from "./iStock-1164946738-scaled.jpg";
const Signin = () => {
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
            <form className="" action="/paynow" method="post">
              <div className="form-grou">
                <label for="">Name: </label>
                <input type="text" name="name" value="" />
              </div>
              <div className="form-grou">
                <label for="">Email: </label>
                <input type="text" name="email" value="" />
              </div>
              <div className="form-grou">
                <label for="">Phone: </label>
                <input type="text" name="phone" value="" />
              </div>
              <div className="form-grou">
                <label for="">Amount: </label>
                <input type="text" name="amount" value="" />
              </div>
              <div className="form-grou">
                <button className="btn form-control btn-primary">
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
export default Signin;
