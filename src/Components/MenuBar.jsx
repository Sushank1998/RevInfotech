import React from "react";
import LeftSide from "./LeftSide";
import MidSide from "./MidSide";
import RightSide from "./RightSide";
import LeftSide2 from "./LeftSide2";
import MidSide2 from "./MidSide2";
import MidSide3 from "./MidSide3";
import MidSide4 from "./MidSide4";
import RightSide2 from "./RightSide2.jsx";
import RightSide3 from "./RightSide3.jsx";
import RightSide4 from "./RightSide4.jsx";
import LeftSide3 from "./LeftSide3.jsx";
import LeftSide4 from "./LeftSide4.jsx";

function MenuBar() {
  return (
    <div className="mt-4 ">
      <div className="grid gap-4 m-4 sm:grid-cols-3  ">
        <div>
          <LeftSide />
          <LeftSide2/>
          <LeftSide3/>
          <LeftSide4/>

        </div>
        <div>
          <MidSide />
          <MidSide2/>
          <MidSide3/>
          <MidSide4/>

        </div>

        <div>
            <RightSide/>         
            <RightSide2/>   
            <RightSide3/>
            <RightSide4/>
           

        </div>
      </div>
    </div>
  );
}

export default MenuBar;
