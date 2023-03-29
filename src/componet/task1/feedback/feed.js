import React from "react";
import'./feed.css'
import { Link } from "react-router-dom";
export function Back(){
    return( 
        <>
       
         <div className="container-fluid pink">
            <div className="row p-3">
            <div className="col-lg-3"></div>
            <div className="text-center col-lg-6 bg-light my-5 p-5 bdr">
                <div className="">
                    <h4>How satisfied are you customer support performance.</h4>
                </div>
                <div className="d-flex flex-row justify-content-around py-5">
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128542;</h1><h1 className="">Sad</h1></Link>
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128536;</h1><h1 className="">kiss</h1></Link>
                    <Link to='/Result' className="badge"><h1 className="display-3">&#128529;</h1><h1 className="">none</h1></Link>
                </div>
            </div>
            <div className="col-lg-3"></div>
            </div>
        </div>
        </>
  )
  }
    export default Back