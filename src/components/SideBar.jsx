import { BsDownload } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import { GrChannel } from "react-icons/gr";
import { IoMusicalNotesOutline, IoVideocamOutline } from "react-icons/io5";
import { PiGithubLogo } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { TbSmartHome } from "react-icons/tb";

const SideBar = () => {
  return (
    <div className="md:flex flex-col bg-white w-44 h-screen justify-around shadow-lg hidden">
      <div className="">
        <div className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <TbSmartHome className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Home</span>
        </div>

        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <CgPlayList className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Playlist</span>
        </div>

        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoMusicalNotesOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Music</span>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="">
        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <GrChannel className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Your Channel</span>
        </div>

        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoVideocamOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Your Videos</span>
        </div>

        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <SlLike className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Liked Videos</span>
        </div>

        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <CiClock2 className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Watch Later</span>
        </div>

        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <BsDownload className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Downloads</span>
        </div>
      </div>

      <hr className="border-t border-gray-300" />
      <div className="">
        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <PiGithubLogo className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">GitHub Repo</span>
        </div>
        <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <span className="text-sm font-ubuntu font-medium whitespace-nowrap">
            By Abdullahi Olaiwon
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
