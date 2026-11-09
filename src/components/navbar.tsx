
import { Download, Sparkles, MessageCircleDashed } from "lucide-react";
import GeminiImage from "../assets/icons8-gemini-ai-48.png";

export default function Navbar() {
  return (
    <nav className="w-full h-[72px] px-6 flex items-center justify-between bg-[#131314] text-[#e3e3e3] border-b border-[#303134]">

      <div className="flex items-center gap-3">
        <img src={GeminiImage} alt="Gemini" className="w-7 h-7 object-contain"/>
      </div>

      <div className="flex items-center gap-2 sm:gap-5">

        <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#28292a] transition-colors text-sm">
          <Download size={18} />
          <span>Get App</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#a8c7fa] text-[#062e6f] hover:bg-[#c2d7fa] transition-colors text-sm font-medium">
          <Sparkles size={17} />
          <span>Upgrade</span>
        </button>

        <button aria-label="Feedback" className="p-2.5 rounded-full hover:bg-[#28292a] transition-colors">
          <MessageCircleDashed size={20} />
        </button>

      </div>
    </nav>
  );
}
