import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name ="Pic random";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";
// const curdate = new Date().toLocaleDateString();
// const curtime = new Date().toLocaleTimeString();
ReactDOM.render(
    
        <>
            <h1 className='heading'> This is  {name} </h1> 
             {/* <p> today date is : {curdate}</p>
             <p> today date is : {curtime}</p> */}
             <p contentEditable='true' class='change'>Happiness to give to quating of her life 💕💕</p>
<div className='imgage'>
             <img src={img1}></img>
             <img src={img2}></img>
             <img src={img3}></img>
             </div>        
             

             {/* <p> {gettime() }</p> */}
            {/* <ol>
                <li> {name} Mr robort</li>
                <li>vikings</li>
                <li>money higst</li>
                <li>stranger things</li>
                <li>pickey blinders</li>
            </ol> */}
        </>
    , document.getElementById("root")); 