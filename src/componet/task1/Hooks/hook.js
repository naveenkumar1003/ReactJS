import React,{useState} from "react";
import Back from './back.jpg'
import './hook.css'
import slate from './slate.png'
export function Counter(){
const[count,setcount]=useState(0)


    return(
         <>
         <div className="div">
           

        <div className="div1">
            <div className="count ">
            <h1 className="text-primary">Maths Count</h1>
          <h1 className="text-white p-4">{count}</h1>
        <button className=" btn bg-primary p-4"onClick={()=>setcount(count+1)}>ADD</button><br></br>
        <button  className=" btn bg-danger p-4"onClick={()=>setcount(count-1)}>sub</button><br></br>
         <button  className=" btn bg-warning p-4" onClick={()=>setcount(count*0)}>Reset</button><br></br>
         </div>
        
       </div>


         </div>
        

        </>
    );
}
  export default Counter