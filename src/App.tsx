import Navbar from "./components/navbar";
import GeminiBackground from "./components/background";
import { Sidebar } from "./components/sidebar";
import "./App.css";
export default function  App(){
    return (
        <div className="flex min-h-screen flex-col overflow-hidden bg-[#131314] text-[#e3e3e3]">
            <Navbar />
            <div className="flex min-h-0 flex-1">
                <Sidebar />
                <GeminiBackground />
            </div>
        </div>
    )
}
