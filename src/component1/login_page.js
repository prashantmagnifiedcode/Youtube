import React from "react";
import imgs from "./login.png";
const Detail = () => {
  return (
    <>
      <div className="detail-container11_login">
        <div className="detailcontainer_login">
          <div className="detailcontainer2_login">
            <img
              className="detail_container_image_login"
              src="https://previews.123rf.com/images/coramax/coramax1301/coramax130100532/17532562-3d-gente-hombre-persona-que-se-sienta-a-la-mesa-y-trabajar-en-un-ordenador-port%C3%A1til-.jpg"
              alt=""
              srcset=""
              
            />
          </div>

          <div className="detail_full_information_login">
            <form className="" action="/paynow" method="post">
             
              <div className="form-grou_login">
                
                <input type="email" name="email" value="" placeholder="Email"/>
              </div>
              <div className="form-grou_login">
                
                <input type="password" name="phone" value="" placeholder="Password"/>
              </div>
            
              <div className="form-grou_login">
                <button className="btn form-control btn-primary">
                  Login
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
