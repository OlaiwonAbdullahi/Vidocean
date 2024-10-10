import { CgPlayList } from "react-icons/cg";
import { FaCircle } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";

const MobileSideBar = () => {
  return (
    <div className=" flex justify-around bg-white z-10 bottom-0 sticky md:hidden">
      <div className="flex flex-col items-center p-2 gap-1.5  rounded-lg cursor-pointer transition-all duration-200">
        <TbSmartHome className="h-5 w-5 text-secondary" />
        <span className="text-sm font-ubuntu font-medium">Home</span>
      </div>

      <div className="flex flex-col items-center p-2 gap-1.5  rounded-lg cursor-pointer transition-all duration-200">
        <CgPlayList className="h-5 w-5 text-secondary" />
        <span className="text-sm font-ubuntu font-medium">Playlist</span>
      </div>

      <div className="flex flex-col items-center p-2 gap-1.5  rounded-lg cursor-pointer transition-all duration-200">
        <IoMusicalNotesOutline className="h-5 w-5 text-secondary" />
        <span className="text-sm font-ubuntu font-medium">Music</span>
      </div>
      <div className="flex flex-col items-center p-2 gap-1.5  rounded-lg cursor-pointer transition-all duration-200">
        <FaCircle className="h-5 w-5 text-secondary" />
        <span className="text-sm font-ubuntu font-medium">Profile</span>
      </div>
    </div>
  );
};

export default MobileSideBar;
