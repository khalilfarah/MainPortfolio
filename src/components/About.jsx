export function About({ismode}){
    const content ={

        "post1":"Hello, I'm Khalil Farah, an IT engineer living in Syria. I work in web development using React JS and have several projects under my belt. I always strive to develop myself and acquire new skills. I'm very passionate about this field and always ready to satisfy clients according to their needs.",
        "post2":"Bachelor's degree in IT Engineering from the University of Homs with a very good grade, 2017-2022."
    }

    return(
        <section id="About" className={`mx-auto text-center items-center  pt-8 h-screen   px-1  justify-center  ${ismode ?"bg-gray-200 ":"bg-gradient-to-r  from-gray-900 via-gray-800 to-gray-700"}`}>
            <h1 className={`md:text-2xl ${ismode ?"text-cyan-700":"text-cyan-500"} text-lg mb-5 font-bold font-serif mx-auto  `}>About</h1>
            <div className=" px-2 gap-8 mx-auto lg:w-3/4 my-auto">
            <div className={`md:w-1/2 border-2 border-cyan-500 ${ismode ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white ":" bg-gradient-to-r from-slate-500 to-slate-300"} rounded-2xl to-80%  mx-auto mt-5`}>
                <h1 className="text-center text-2xl  font-bold pt-4">About me</h1>
                <p className="text-center mx-auto pt-4   px-5 pb-4 italic">{content.post1}</p>
            </div>

            <div className={`md:w-1/2 h-[200px] border-2 border-cyan-500 ${ismode ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white ":" bg-gradient-to-r from-slate-500 to-slate-300"} rounded-2xl to-80%  mx-auto mt-5`}>
                <h1 className="text-center text-2xl  font-bold pt-4">Education:</h1>
                <p className="text-center mx-auto pt-4   px-5 pb-4 italic">{content.post2}</p>
            </div>  
            
            </div>

            

        </section>
    )
}