import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer,toast} from "react-toastify"
export function Contact({ismode}){
    const notify1 = () => toast("thank you , successfuly send to khalil ");
    const notify2 = () => toast("Connection Failed  ");
    const [send,setSend]=useState(true);
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_vxs7wmm', 'template_n4rg599', form.current, {
          publicKey: 'VmnQKXvEsljr_6B60',
        })
        .then(
          () => {
            setSend(true)
            console.log('SUCCESS!');
          },
          (error) => {
            setSend(false)
            console.log('FAILED...', error.text);
          },
        );
    };
    const [isFill,setIsFill]=useState({
        name:"",
        email:"",
        text:"",
       
      });
      const btnIsDisabled=isFill.name=="" || isFill.email=="" ||isFill.text=="" ;
      let btnClasses =false
      if(btnIsDisabled){btnClasses=true }
     else { btnClasses=false }
    return(
        <section id="Contact" className={`mx-auto  items-center pt-8  px-1 justify-center   ${ismode ?"bg-gray-100 ":"bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"}`}>
            <h1 className={`md:text-2xl ${ismode ?"text-cyan-700":"text-cyan-500"} text-lg mb-5 font-bold font-serif mx-auto text-center `}>Contact me</h1>
            <form  ref={form} onSubmit={sendEmail} className="mt-5 px-2 md:w-3/4 mx-auto">
            <input  name="from_name"   type="text" placeholder="FULL NAME" value={isFill.name} onChange={(event)=>{setIsFill({...isFill,name:event.target.value})}} className="border  border-cyan-500 p-2 w-full text-cyan-500 outline-none mb-3 bg-white"  />
            <input  name="from_email" type="email" placeholder="YOUR EMAIL" value={isFill.email} onChange={(event)=>{setIsFill({...isFill,email:event.target.value})}} className="border border-cyan-500 p-2 w-full text-cyan-500 outline-none peer bg-white invalid:text-red-500"/>
            <p className="invisible peer-invalid:visible text-red-500">Please provide a valid email address.</p>
            <textarea name="message" rows={13} placeholder="YOUR MESSAGE" value={isFill.text} onChange={(event)=>{setIsFill({...isFill,text:event.target.value})}} className="border border-cyan-500 p-2 w-full text-cyan-500 outline-none mb-2 bg-white" />
            <div className="mx-auto w-1/4 pb-4 ">
              <button onClick={send ? notify1:notify2} title={btnClasses?"please enter info above":""}  type="submit"  disabled={btnIsDisabled} className={`text-center w-full mx-auto justify-center  px-6 py-2 font-bold ${btnClasses ?"bg-gray-600 text-gray-300 cursor-not-allowed":"bg-cyan-500 text-white cursor-pointer"} `}>Send</button>
            </div>
            </form>
            
            <ToastContainer autoClose={3000} limit={1} position="top-center" pauseOnHover  />


        </section>
    )
}