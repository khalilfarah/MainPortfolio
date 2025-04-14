export function Skills({ismode}){
    const skill=[
        {name:"HTML",prec:"95%"},
        {name:"CSS",prec:"93%"},
        {name:"JAVASCRIPT",prec:"90%"},
        {name:"Tailwind Css",prec:"90%"},
        {name:"React Js",prec:"85%"},
        {name:"Github",prec:"88%"},
        {name:"Git",prec:"80%"},
    ]

    return(
        <section id="Skills" className={`mx-auto text-center items-center  pt-8 pb-4    px-1  justify-center  ${ismode ?"bg-gray-200 ":"bg-gradient-to-r  from-gray-900 via-gray-800 to-gray-700"}`}>
            <h1 className={`md:text-2xl ${ismode ?"text-cyan-700":"text-cyan-500"} text-lg mb-5 font-bold font-serif mx-auto  `}>Skills</h1>
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 ">
                {skill.map((item)=>(
                    <div className={`border border-cyan-500 w-full h-[150px] rounded-lg justify-center hover:scale-[1.1] hover:duration-1000 ${ismode ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white ":" bg-gradient-to-r from-slate-500 to-slate-300"}`}>
                        <div className="text-center ">
                        <h1 className="pt-8 pb-3 text-4xl font-bold">{item.name}</h1>
                        <h1 className="font-bold ">{item.prec}</h1>
                        
                        </div>
                       
                    </div>

                ))}

            </div>

        </section>
    )
}