import React from "react";
import data from './data.jpeg'
import Iot from './iot.jpg'
import Vr from './VR.jpg'
import Ml from './ml.jpg'
import './tech.css'

function Tech(){
    return(
        <>
        
        <h1 className="text-center">learn4.0 technologies</h1>
        <p  className="text-center">The studies have been carried out for the European Commission and express the opinions of the organisations having undertaken them.
             The views have not been.The Institute of Tourism Studies (ITS) offers programmes that range from Foundation to Masters Degree level in the field of Tourism and Hospitality </p>
         <div className="container justify-content ">
            <div className="row ">
                <div className="col-lg-5 bg-primary border1 m-2">
                <h1>Data Science</h1>
                <p>30+ In-Demand Skills & Tools, Access to 150+ instructor-led online classes for a year. 
                    Get Noticed by the Top Hiring Companies with Simplilearn's Job Assist Program. Blended learning. #1 Data Science Course.
                     Easy EMI Options. Instructor-led Training.</p>
                     <img className="col-lg-6 data p-2"src={data}/>
                </div>
                <div className=" out src1 col-lg-5 bg-secondary  border1 m-2">
                <h1>Iot Devloper</h1>
                <p>30+ In-Demand Skills & Tools, Access to 150+ instructor-led online classes for a year. 
                    Get Noticed by the Top Hiring Companies with Simplilearn's Job Assist Program. Blended learning. #1 Data Science Course.
                     Easy EMI Options. Instructor-led Training.</p>
                     <img className="  col-lg-6 data p-2"src={Iot}/>
                </div>
            </div>
         </div>
         <div className=" container justify-content  ">
            <div className="row ">
                <div className=" out col-lg-5 bg-success border1 m-2">
                <h1>VR Devloper</h1>
                <p>30+ In-Demand Skills & Tools, Access to 150+ instructor-led online classes for a year. 
                    Get Noticed by the Top Hiring Companies with Simplilearn's Job Assist Program. Blended learning. #1 Data Science Course.
                     Easy EMI Options. Instructor-led Training.</p>
                     <img className="  col-lg-6  data p-2"src={Vr}/>
                </div>
                <div className=" out col-lg-5 bg-danger border1 m-2">
                <h1>ML Engineering</h1>
                <p>30+ In-Demand Skills & Tools, Access to 150+ instructor-led online classes for a year. 
                    Get Noticed by the Top Hiring Companies with Simplilearn's Job Assist Program. Blended learning. #1 Data Science Course.
                     Easy EMI Options. Instructor-led Training.</p>
                     <img className=" col-lg-6 data p-2"src={Ml}/>
                </div>
            </div>
         </div>
        </>
    );
}
     export default Tech