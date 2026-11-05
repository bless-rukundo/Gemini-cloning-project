import Main from "./components/main2";
import Navbar from "./components/navbar";
import './App.css'
export default function  App(){
    return (
        <>
        <div>
    <div className="relative min-h-screen w-full bg-[#030712] overflow-hidden flex flex-col items-center justify-center text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-900/30 via-indigo-950/40 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
      </div>
    </div>
         <Navbar />        
    </div>
        </>
    )
}

