import React from "react";
import HomeCardView  from "./HomeCardView";
 

function Homepage() {
  var logo = require("./logos/logo7.png");

  return (
    <div>
      <div>
        <div
          style={{
            margin: " 0%",
            padding: "0%",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            backgroundColor: "#646af1",
            position: "fixed",
          }}
        >
          <img
            src={logo}
            style={{
              margin: "auto",
              height: "150px",
              width: "150px",
              borderRadius: "50%",
            }}
          />
        </div>
        
      </div>
      <HomeCardView/>
      <HomeCardView/>
      <HomeCardView/>
      <HomeCardView/>
    </div>
    
  );
}

export default Homepage;
