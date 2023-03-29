import React from "react";
import './login.css'
import com from './computer.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import{faLock} from "@fortawesome/free-solid-svg-icons"
import Menu from "../menu";
export function Login(){
    return(
     <>
     
     <div className="b ">
     
     <div className="container p-5 bg-white  ">
       <div className="row  ">
        <div className="col-lg-6">
        <img className="img"src={com}/>
        </div>
        <div className=" l col-lg-6">
        <h2>Member login</h2>
        <span> <FontAwesomeIcon icon={faEnvelope} /><input className="p " type="text" id="pass" placeholder="Enter your password"/><br/><br/></span>
       <span><FontAwesomeIcon icon={faLock} /><input className="p" type="password" id="pass" placeholder="Enter your password"/><br/><br/></span>
        <button className="but bg-success">Login</button><br/><br/>
        <p>forget<span className="user">/username password </span></p>
        <p className="user">create your account</p>
        </div>
       </div>
     </div>
     </div> 
    

     </>
    );
}
      export default Login;