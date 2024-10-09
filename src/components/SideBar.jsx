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
    <div className=" flex flex-col bg-slate-600 w-36  h-screen">
      <div className="">
        <div className=" flex p-1 gap-2 ">
          <TbSmartHome className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">Home</span>
        </div>
        <div className="flex p-1 gap-2">
          <CgPlayList className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">PlayList</span>
        </div>

        <div className="flex p-1 gap-2">
          <IoMusicalNotesOutline className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">Music</span>
        </div>
      </div>
      <hr className=" border-t border-t-secondary" />
      <div className="">
        <div className="flex p-1 gap-2">
          <GrChannel className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">Your Channel</span>
        </div>
        <div className="flex p-1 gap-2">
          <IoVideocamOutline className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">Your video</span>
        </div>
        <div className="flex p-1 gap-2">
          <SlLike className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">Liked video</span>
        </div>
        <div className="flex p-1 gap-2">
          <CiClock2 className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">Watch Later</span>
        </div>
        <div className="flex p-1 gap-2">
          <BsDownload className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">Downloads</span>
        </div>
      </div>
      <hr className=" border-t border-t-secondary" />
      <div className="">
        <div className="flex p-1 gap-2">
          <PiGithubLogo className="h-6 w-6" />
          <span className="text-sm font-ubuntu font-medium">GitHub Repo</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
