import React from "react";
import './menu.css';
import { Link } from "react-router-dom";
function Menu(){
    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <Link to='/' ><li className="nav-item active ml-5 text-secondary">Home</li></Link>
                <Link to='/Card' ><li className="nav-item active ml-5 text-secondary">Card</li></Link>
                <Link to='/League' ><li className="nav-item active ml-5 text-secondary">League</li></Link>
                <Link to='/Social' ><li className="nav-item active ml-5 text-secondary">Social</li></Link>
                <Link to ='/Noti'><li className="nav-item active ml-5 text-secondary">Noti</li></Link>
                <Link to= '/Login'><li className="nav-item active ml-5 text-secondary">Login</li></Link>
                <Link to= '/Tech'><li className="nav-item active ml-5 text-secondary">Tech</li></Link>
                <Link to= '/Back'><li className="nav-item active ml-5 text-secondary">Back</li></Link>
                <Link to= '/Result'><li className="nav-item active ml-5 text-secondary">Result</li></Link>
                <Link to= '/Fruit'><li className="nav-item active ml-5 text-secondary">Fruit</li></Link>
                </ul>
            </div>
        </nav>
        
             {/* <ul>
                <Link to='/' ><li className="nav-item active ml-5 text-secondary">Home</li></Link>
                <Link to='/Card' ><li className="nav-item active ml-5 text-secondary">Card</li></Link>
                <Link to='/League' ><li className="nav-item active ml-5 text-secondary">League</li></Link>
                <Link to='/Social' ><li className="nav-item active ml-5 text-secondary">Social</li></Link>
                <Link to ='/Noti'><li className="nav-item active ml-5 text-secondary">Noti</li></Link>
                <Link to= '/Login'><li className="nav-item active ml-5 text-secondary">Login</li></Link>
                <Link to= '/Tech'><li className="nav-item active ml-5 text-secondary">Tech</li></Link>
                
            </ul> */}
            
       
        </>
    );
}
   export default Menu
