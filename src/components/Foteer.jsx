export function Foteer(){
    var d= new Date();

    return(
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  text-white p-4 ">
            <p className="text-center text-sm mt-1 mb-2">© All rigths reserved | by Eng-Khalil Farah <code className="text-amber-300"> {d.getDate()}-{d.getMonth()+1}-{d.getFullYear() } </code></p>
        </div>
    )
}