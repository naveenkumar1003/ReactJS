import React from "react";
import './notifi.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {faBell} from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export function Noti(){
    return(
        <>
        <div className="container">
            <h1 className="text-center h1 p-4">Notification</h1>
            <div className="row" >
                <div className="col-lg-4 ">
               
                </div>
                  <div className="col-lg-4  ">
                  <h4 className="bg-primary p-2 "><FontAwesomeIcon icon={faCircleCheck}/>Message</h4>
                 <h4 className="bg-success p-2"><FontAwesomeIcon icon={faCircleCheck}/>Success Message</h4>
                 <h4 className=" bg-warning p-2"><FontAwesomeIcon icon= {faBell}/>Warning Message</h4>
                 <h4 className=" bg-danger p-2"><FontAwesomeIcon icon={faCircleExclamation}/>Error Message</h4>
                 
                </div>
                <div className="col-lg-4">
              
                
                </div>
                {/* <div className="col-lg-3">
               
                
                </div> */}
                

            </div>
        </div>
        
        </>
    )
}
    export default Noti;