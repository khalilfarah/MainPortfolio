import { Italic } from "lucide-react";
import { useState } from "react"
import { motion } from "framer-motion";
export function Projects({ismode}){
    const oneproject=[
        {
            name:"Clothes Store",
            href:"https://clothes-store-shopping.netlify.app/",
            description:"Ecommerce Store to view Clothes  "
        },
        {
            name:"  Electronic Store",
            href:"https://electronic-shop-store.netlify.app/",
            description:"Ecommerce Store to view digital products as laptop ,mobile ...etc  "
        },
        {
            name:"Todo list",
            href:"https://simple-my-todolist.netlify.app/",
            description:"Todo list to recoginez tasks   "
        },
        {
            name:"Dashboard",
            href:"https://first-dashboard-overview.netlify.app/",
            description:"Dashboard to analysic sales ,products..etc   "
        },
        {
            name:" Store Template",
            href:"https://test-ecommerce-store.netlify.app/",
            description:"Template to homepage store   "
        },
        {
            name:"Portfolio",
            href:"https://khalil-farah-portfolio.netlify.app/",
            description:"My portfolio as Template  "
        }];

        const towproject=[
        {
            name:"Landing Page",
            href:"https://lavalandingpage.netlify.app/",
            description:"LandingPage as Template  "
        },
        {
            name:"Digital Trend",
            href:"https://digital-trend.netlify.app/",
            description:"Website as template  "
        },
        {
            name:"Website",
            href:"https://webtailwindcss.netlify.app/",
            description:"Website as template  "
        },

        {
            name:"Tallor black Shop",
            href:"https://tallor-shop.netlify.app/",
            description:"Website as template  "
        },
        {
            name:"Froncheer",
            href:"https://froncheer.netlify.app/",
            description:"Website as space template  "
        },
        {
            name:"Technology Website",
            href:"https://webtechnologystore.netlify.app/",
            description:"Website as template  "
        },
        
    ];

    const [view,setView]=useState(false);

    return(
        <section id="Projects"  className={`mx-auto text-center items-center pt-8  px-1 justify-center   ${ismode ?"bg-gray-100 ":"bg-gradient-to-r  from-gray-700 via-gray-800 to-gray-900"}`}>
            <h1 className={`md:text-2xl ${ismode ?"text-cyan-700":"text-cyan-500"} text-lg mb-5 font-bold font-serif mx-auto `}>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto px-2 md:w-3/4 ">
                { oneproject.map((item)=>(
                    <div className={`text-center mx-auto border rounded-lg  border-cyan-500 w-full h-[180px] justify-center items-center pt-3 hover:scale-[1.1] hover:duration-1000 ${ismode ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 ":" bg-gradient-to-r from-slate-500 to-slate-300"}`} >
                        <h1 className={`font-bold pt-4 pb-1 text-2xl ${ismode ?"text-gray-100 ":"text-gray-900"}`}>{item.name}</h1>
                        <p className={`font-semibold mx-auto text-sm pb-3 h-[60px] ${ismode ?"text-gray-100":"text-gray-900"}`}>{item.description}</p>
                        <a href={item.href} target="_blank" className="bg-gray-950 px-8 py-2 text-gray-100 items-center rounded-xl border border-cyan-500 shadow-lg text-sm hover:bg-gray-800 hover:duration-1000 " >View </a>

                    </div>
                ))}

            </div>

            <motion.div className={` mx-auto px-2 md:w-3/4 mt-3  `}
         
             transition={{ duration: 2 }}>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 `}>
                {view && towproject.map((item)=>(
                    <div className={`text-center mx-auto border rounded-lg  border-cyan-500 w-full h-[180px] justify-center items-center pt-3 hover:scale-[1.1] hover:duration-1000 ${ismode ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 ":" bg-gradient-to-r from-slate-500 to-slate-300"}`} >
                        <h1 className={`font-bold pt-4 pb-1 text-2xl ${ismode ?"text-gray-100 ":"text-gray-900"}`}>{item.name}</h1>
                        <p className={`font-semibold mx-auto text-sm pb-3 h-[60px] ${ismode ?"text-gray-100":"text-gray-900"}`}>{item.description}</p>
                        <a href={item.href} target="_blank" className="bg-gray-950 px-8 py-2 text-gray-100 items-center rounded-xl border border-cyan-500 shadow-lg text-sm hover:bg-gray-800 hover:duration-1000 " >View </a>

                    </div>
                ))}
                </div>
              <div>
                <button onClick={()=>{setView(!view)}} className={`mt-5 mb-2 cursor-pointer hover:bg-gray-800 hover:duration-1000 px-4 py-2 justify-center text-gray-100 bg-gray-950 rounded-xl ${view ?"hidden":""}`}>Show More</button>
                <button onClick={()=>{setView(!view)}} className={`mt-5 mb-2 cursor-pointer hover:bg-gray-800 hover:duration-1000 px-4 py-2 justify-center text-gray-100 bg-gray-950 rounded-xl ${view ?"":"hidden"}`}>Show Less</button>
               
               </div>

            </motion.div>

         


        </section>
    )
}