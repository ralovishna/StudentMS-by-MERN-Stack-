import React, { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ChangingProgressProvider from "./ChangingProgressProvider";
import ScoreBox from "./ScoreBox";

const ScoreBoard = () => {
  // const percentage = 34;

  const [Redval, setRedVal] = useState(0);
  const [blueVal, setBlueVal] = useState(100);
  const Anim = () => {
    setBlueVal(70);
  };
  return (
    <>
      <div id="container" className=" h-auto  flex gap-3 ">
        <div id="left"
          onMouseEnter={Anim}
          className="w-[300px] h-[380px] py-4   flex items-center flex-col "
        >
          <h3>Student Average score</h3>
          <div className="w-[200px] h-[270px] mt-3">
            {" "}
            <CircularProgressbarWithChildren
              value={Redval}
              text="Excellent"
              strokeWidth={8}
              styles={buildStyles({
                textColor: "red",
                textSize: "15px",
                pathColor: "#f00",
                trailColor: "transparent",
              })}
            >
              {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
              <div style={{ width: "84%" }}>
                <CircularProgressbar
                  value={blueVal}
                  styles={buildStyles({
                    trailColor: "transparent",
                  })}
                />
              </div>
            </CircularProgressbarWithChildren>
          </div>
          {/* marks  */}
          <div className="flex gap-2 w-[100%] justify-around mt-2 ">
            <ScoreBox
              text="Avg. Class Score"
              seVal={setRedVal}
              textColor="#ff0000"
              bgrndColor="#f5bebe"
            />
            <ScoreBox
              text=" Avg. Student score"
              textColor="#3e98c7"
              bgrndColor="#dbeafe"
            />
            <ScoreBox
              text=" Class Highest score"
              textColor="green"
              bgrndColor="#dbeafe"
            />
          </div>
        </div>
        <div id="right" className="h-[380px] w-[300px] py-4  flex flex-col items-center justify-center ">
      
             <h3>Student Attendance</h3>
          <CircularProgressbar
            className="w-[200px]"
            value={70}
            text={`${68}%`}
            styles={buildStyles({
              strokeLinecap: "butt",
              trailColor: "transparent",
              pathColor: "#f00",
            })}

          />
          <div className="flex gap-3 -mb-3 pt-3">
               <ScoreBox
              text=" Lecture Attend"
              textColor="red"
              bgrndColor="#dbeafe"
            />
               <ScoreBox
              text=" Lecture Dilevered"
              textColor="green"
              bgrndColor="#dbeafe"
            />
            </div>
   </div>
      </div>
    </>
  );
};

export default ScoreBoard;
