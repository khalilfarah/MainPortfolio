import {SignalHighIcon ,Sun,Moon ,Menu ,X} from "lucide-react"
import { useState ,useEffect } from "react";
import {motion}from "framer-motion"

const Links =["Home","About","Projects","Skills","Contact"]
export default function Header(props) {
  {/**usestates hook for menu ,mode,scroll,active */}
  const [ismode,setIsmode]=useState(true);
  const [menu ,setMenu]=useState(false);
  const [isScrolled,setIsScrolled]=useState(false);
  const [activeLinks ,setActiveLinks]=useState("Home");

  const scrollToSection=(sectionId)=>{
    const element=document.getElementById(sectionId);
    if(element) {
        const marginTop=0;
        const scrollToY=element.getBoundingClientRect().top + window.scrollY - marginTop;
        window.scrollTo({top:scrollToY , behavior:"smooth"});



        } };

        const determinActiveSection=()=>{

          for(let i=Links.length-1;i>=0;i--){
              const section=document.getElementById(Links[i]);
              if(section){
                  const rect=section.getBoundingClientRect();
                  if(rect.top<=120 && rect.bottom>=120){
                      setActiveLinks(Links[i]);
                      break;
  
                  }
  
              }
          }
      };

      useEffect(()=>{
        const handleScroll=()=>{
            if (window.scrollY>300){setIsScrolled(!isScrolled);}
            else{setIsScrolled(isScrolled);}
            determinActiveSection()}

        window.addEventListener("scroll",handleScroll);
        return()=>{ window.removeEventListener("scroll",handleScroll);}

    });

    useEffect(()=>{

      props.GetDataValue(ismode);
  }

  )
  

  return (
    <header className={ `  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  text-white  p-4 flex items-center justify-between sticky  top-0`}>
        {/**Logo */}
        <div className="animate-pulse  text-cyan-400">
          <div className="flex gap-1  items-center ">
            <SignalHighIcon size={20} />
            <h1 >Eng-Khalil Farah</h1>
          </div>
          <p className="text-sm px-2">Frontend Dev | React js</p>
        </div>
      {/**navbar */}
      <nav className="hidden md:flex space-x-6 font-medium px-20 text-[1rem] ">
       {Links.map((link,index)=>(
            <a key={index} href={`#${link}`} onClick={()=>scrollToSection(Links[index])}  className={`${activeLinks === Links[index]?"active":""} hover:text-cyan-400 hover:duration-1000`}>{link}</a>
         ))}

         {/**dark light mode */}
        <div> 
          <Sun className={`text-amber-300 cursor-pointer  ${ismode ?"":"hidden"}`}  onClick={()=>{setIsmode(!ismode)}}/>
          <Moon className={`cursor-pointer  ${ismode ?"hidden":""}`} onClick={()=>{setIsmode(!ismode)}}/>
        </div>
      </nav>

      {/**burger */}
      <div className="md:hidden" >
        <Menu className={`cursor-pointer `}  onClick={()=>{setMenu(!menu)}} />
       </div>
      
      {/** sidebar menu  */}
      <motion.div className={`md:hidden space-y-6 w-3/4   absolute top-0 pt-8    right-0 h-screen  text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  `} 
       animate={{width :menu ? 300: 0}} 
        transition={{ duration: 0.8 }}>
        <X className={`cursor-pointer mx-auto block ${menu?"":"hidden"}   `}   onClick={()=>{setMenu(!menu)}}/>
          
       {Links.map((link,index)=>(
            <a key={index} href={`#${link}`} onClick={()=>scrollToSection(Links[index])} className={`${activeLinks === Links[index]?"active":""} hover:text-cyan-400 hover:duration-1000 block ${menu?"":"hidden"}`} >{link}</a>
         ))}

       

           {/**dark light mode */}
        <div > 
          <Sun className={`text-amber-300 block mx-auto cursor-pointer ${menu?"":"hidden"}  ${ismode ?"":"hidden"}`}  onClick={()=>{setIsmode(!ismode)}}/>
          <Moon className={`text-white block mx-auto  cursor-pointer ${menu?"":"hidden"}  ${ismode ?"hidden":""}`} onClick={()=>{setIsmode(!ismode)}}/>
        </div>

      </motion.div>
    </header>
  );
}

