import React from "react";

const ScoreBox = ({text,textColor,bgrndColor,seVal}) => {
    const Anim=()=>{
     
     seVal(50);
    }
  return (
    
    <>
      <div
        id="student-Score"
        className="rounded-2xl h-[80px] w-[95px]  flex items-center flex-col pt-2 p-1 justify-center " onMouseEnter={Anim}
        style={{ backgroundColor: bgrndColor, color: textColor }}
      >

        <h4>37/108</h4>
          <p className="  text-center text-xs text-black font-bold">{text}</p>
      

      </div>
    </>
  );
};

export default ScoreBox;
