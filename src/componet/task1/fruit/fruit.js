import React,{useState} from "react";
import './fruit.css'
import an from './banana.png'
import Man from './Mango.png'
import Back from './backim.png'
import Front from './stockphoto.jpg'
import Wall from './wall.jpg'
import Water from './water.jpg'
export function Fruit(){
    const[count,setCount]=useState(0)
    const[fruit,setFruit]=useState(0)
    function  reset(){
        setCount(count*0);
        setFruit(fruit*0)
    }
    
    return(
        <>
    <div className="f container row">
        <div className="col-lg-2"></div>
        <div  className="col-lg-8 m-5 bg-warning">
        <h1 className="text-center text-white">Fruits</h1>
        <p className="p ml-4 text-white">Bobe ate<span className="p-2 text-white">{count}</span>Banana<span className="p-2 text-white">{fruit}</span>Mangoes</p>
        <img className=" col-lg-5 mang  " src={an}/>
        <img className="  col-lg-5 ban " src={Man}/>
        <button className=" col-lg-3 mr-4  my-2   bg-secondary"onClick={()=>setCount(count+1)}>Banana</button>
        <button className=" col-lg-3  my-2 bg-primary"onClick={()=>setFruit(fruit+1)}>Mango</button>  
        <button  className="col-lg-3  my-2  pr-2 bg-warning " onClick={reset}>Reset</button><br></br>
        </div>
        <div className="col-lg-2"></div>
        </div>
        </>
    )
}