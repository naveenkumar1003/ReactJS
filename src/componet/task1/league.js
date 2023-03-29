import React from "react";
import Csk from './csk.png'
import Mi from './mumbai.jpg'
import Menu from './menu'
import './league.css';

function Over(){
     return(
       <>
       
       <div className="container-fluid img2">
            <h1 className="text-center text-white"> Indian premier league</h1>
        <div className="row" >
            
             <img className="col-lg-6 row1" src={Csk}/>
           
             
             <img  className="col-lg-6 row1 "src={Mi}/>
                

        </div>
       </div>

       </>


     );

}
       export default Over;