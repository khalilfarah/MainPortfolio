import React from "react";
import Uplight from "../assets/icons/uplight.png"

import { useState, useEffect } from "react";
export  function ScrollTop(){

    const [backToTopButton,setBackToTopButton]=useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){  setBackToTopButton(true) }
            else {setBackToTopButton(false)}
        })
    },[])

    const scrollUp =()=>{
      
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

    }

return(
    <div>

        {backToTopButton && (<img src={Uplight} className="fixed bottom-[50px] justify-center right-[50px] h-[50px] px-3 py-3 bg-gray-800 hover:bg-gray-500 hover:duration-1000   rounded-full mx-auto text-center  cursor-pointer -rotate-90" onClick={scrollUp}/>)}



    </div>
);



}