import Facebook from "../assets/icons/facebook.png"
import Linkedin from "../assets/icons/linkedin.png"
import Gmail from "../assets/icons/email.png"
import Telegaram from "../assets/icons/telegram.png"
import Call from "../assets/icons/call.png"
import Github from "../assets/icons/github.png"

const Social =[
    { name:"Facebook",icon:Facebook, href:"https://www.facebook.com/khalilfarah464",description:"khalil farah"},
    { name:"Linkedin",icon:Linkedin, href:"https://www.Linkedin.com/khalilfarah464",description:"khalil farah"},
    { name:"Gmail",icon:Gmail, href:"https://mail.google.com",description:"khalilfarah464@gmail.com"},
    { name:"Telegram",icon:Telegaram, href:"https://www.T.me/KhalilFarah",description:"@khalil"},
    { name:"Call",icon:Call, href:"https://wa.me/+963991132008",description:"+963 991132008"},
    { name:"Github",icon:Github, href:"https://github.com/khalilfarah",description:"khalilfarah"}
];
export function Home({ismode}){
    return(
        <section id="Home" className={`mx-auto text-center pt-10 md:pt-20 px-1  h-screen justify-center  ${ismode ?"bg-gray-100 ":"bg-gradient-to-r  from-gray-700 via-gray-800 to-gray-900"}`}>
            <h1 className={`md:text-2xl ${ismode ?"text-cyan-700":"text-cyan-500"} text-lg mb-5 font-bold font-serif mx-auto  `}>Home </h1>
            <h1 className={`md:text-2xl  ${ismode ?"text-cyan-700":"text-white"} text-lg mb-5 font-bold font-serif mx-auto  `}>Eng-Khalil Farah | Frontend Developer </h1>
            <div className="mx-auto justify-center items-center grid grid-cols-2 md:grid-cols-3 gap-2 md:w-[70%] lg:w-[60%] mt-5">
                {Social.map((item )=>(
                    
                    <div  className={`justify-center rounded-lg h-[150px] shadow-[5px_5px_5px_rgb(16,78,100,0.3)] border-cyan-500 border-2 hover:scale-[1.1]  ${ismode ?"bg-gray-900  hover:duration-1000":"bg-gray-100   hover:duration-1000 "}`}>
                       <a href={item.href}  target="_blank"> <img src={item.icon} alt={item.name} title={item.name} className={`justify-center mx-auto mt-5  bg-cyan-900 rounded-lg px-6 py-4 items-center hover:px-5 hover:py-4 hover:duration-700 ${item.name==="Github"?"h-[50px]":""} ${item.name==="Facebook"?"hover:bg-[#155dfc]":"" } ${ item.name==="Linkedin"?"hover:bg-[#162456]":""} ${ item.name==="Gmail"?"hover:bg-[#e7000b]":""} ${ item.name==="Telegram"?"hover:bg-[#151D2D]":""} ${ item.name==="Call"?"hover:bg-[#00c950]":""}  ${ item.name==="Github"?"hover:bg-[#1e2939]":""} `} /> </a>
                       <a href={item.href}  target="_blank"><h1 className={`text-lg pt-3  text-center font-bold  ${ismode ?"text-gray-100":"text-gray-900"}`}>{item.name}</h1></a>
                        <p className={`text-center lg:text-md text-sm text-cyan-500 ${item.description==="khalilfarah464@gmail.com"?"text-xs":""} `}>{item.description}</p>
                    </div>
                  

                ))}

            </div>
            
            


        </section>
    )
}