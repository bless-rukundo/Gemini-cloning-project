
import { SquarePen, Search, Compass, Grid2X2, Settings, CircleHelp, Clock, GraduationCap } from "lucide-react";


export function Sidebar() {
  return (
    <>
    <aside className="sticky top-0 flex h-[calc(100vh-72px)] w-[72px] shrink-0 flex-col items-center justify-between border-r border-[#303134] bg-[#131314] py-2 text-[#c4c7c5]">

      <div className="flex flex-col items-center gap-5 w-full">
        <div className="flex flex-col items-center gap-2 w-full">

          <button
            title="New chat" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#282a2c] text-[#e3e3e3] hover:bg-[#393b3d] transition-colors">
            <SquarePen size={15}/>
          </button>

          <button title="Search chats" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#28292a] transition-colors" >
            <Search size={15} />
          </button>

          <button title="Explore" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#28292a] transition-colors">
            <Compass size={15} />
          </button>

          <button title="Apps" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#28292a] transition-colors">
            <Grid2X2 size={15} />
          </button>

          <button title="scheduled" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#28292a] transition-colors">
            <Clock size={15}/>
          </button>  

          <button title="graduation" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#28292a] transition-colors">
            <GraduationCap size={15}/>
          </button>         
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col items-center gap-5">

        <button title="Help" className="p-3 rounded-full hover:bg-[#28292a] transition-colors">
          <CircleHelp size={15} />
        </button>

        <button title="Settings" className="p-3 rounded-full hover:bg-[#28292a] transition-colors">
          <Settings size={15} />
        </button>
      </div>
    </aside>
    </>
  );
}
