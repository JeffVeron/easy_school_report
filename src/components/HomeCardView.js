import React from "react";
import classes from "./HomecardView.module.css";

function HomeCardView(props) {
  var image1 = require("./pics/1.jpg");
  // not displaying 
  return (
    <div>
      <div className={classes.homepage}>
        <div className={classes.cardview}>
          <div className={classes.imagecircle}>
            <div className={classes.imagebox}>
              <img
                src={image1}
                style={{
                  margin: "auto",
                  width: "200px",
                  height: "150px",
                  borderRradius: "5%",
                }}
              />
            </div>
          </div>
          <div className={classes.textname}>
            <p>SIGN UP</p>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default HomeCardView;
