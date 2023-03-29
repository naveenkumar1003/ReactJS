import React from "react";
import photo from './profile.png';
import img from './watch.png';
// import back from './backimg.png'
import Menu from './menu';
import './card.css'
 export function Card(){
     return(
        <>
        


            <div className="contanier-fluid cardimg">
                <div className="row p-5">
                    <div className="col-lg-4">
                        
                    </div>
                    <div className="col-lg-4 bg-primary text-center " >
                    <img className="p "src={photo}/>
                    <h2 className=" text-center">kiran.v</h2>
                    <p className="text-center">Viashnu Institution of computer Eduction and technologies bhimavaram</p>
                    <img className=" src col-lg-4" src={img}/>

             </div>
                    <div className="col-lg-4">

                    </div>

                </div>

            </div>
        </>

     );
}
    export default Card;