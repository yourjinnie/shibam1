import React, { useState } from 'react';

export default function WN() {
 

 

  return (
    <section className="con-wrap-2">
      <div className="hero-con">
        <div id="chatme">
          <div className="con-form">
            <div id="conchat" style={{display:"flex", flexDirection:"column"}} >
              <h1 className="font-face-futur-md-bt hhh">Let's keep in touch.</h1>
              <p className="font-face-futur-bk ppp">
                Thank you for reaching out. We will analyse your requirements and will soon get in touch with you.
              </p>
              <div className="boxchat"  >
              
              <img 
                       src='assets/sixd-a08ebc6e.png'
                        style={{height:"500px",alignSelf:"center"}}
              />
                 {/* <button className="btn font-face-futur-md-bt" style={{cursor:"pointer"}} onClick={handleClick} >Home Page</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
