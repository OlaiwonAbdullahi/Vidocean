import { CgGym, CgPlayList } from "react-icons/cg";
import { IoIosLaptop } from "react-icons/io";
import {
  IoBookOutline,
  IoMusicalNotesOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { PiGithubLogo } from "react-icons/pi";
import { TbSmartHome } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="md:flex flex-col fixed bg-white w-44 h-screen justify-around shadow-lg hidden">
      <div className="">
        <button className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <TbSmartHome className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Home</span>
        </button>

        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <CgPlayList className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Playlist</span>
        </button>

        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoMusicalNotesOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Music</span>
        </button>
      </div>

      <div className="">
        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoBookOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Education</span>
        </button>

        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoVideocamOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">Entertainment</span>
        </button>

        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoMusicalNotesOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">
            {" "}
            Music & Dance
          </span>
        </button>

        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoIosLaptop className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">
            {" "}
            Tech Reviews{" "}
          </span>
        </button>

        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <CgGym className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">
            {" "}
            Health & Fitness
          </span>
        </button>
        <button className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <GiClothes className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium">
            {" "}
            Beauty & Fashion
          </span>
        </button>
      </div>

      <div className="">
        <a href="https://github.com/OlaiwonAbdullahi/Vidocean">
          <div className="flex items-center p-2 gap-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
            <PiGithubLogo className="h-5 w-5 text-secondary" />
            <span className="text-sm font-ubuntu font-medium">GitHub Repo</span>
          </div>
        </a>
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
