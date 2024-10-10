import { IoMoonOutline } from "react-icons/io5";
import Logo from "../assets/Vidocean.png";
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { PiGithubLogo } from "react-icons/pi";
const MobileNavBar = () => {
  return (
    <>
      <div className="  md:hidden flex justify-between p-2  top-0 sticky border-b border-b-primary bg-white z-10">
        <div className="flex-shrink-0">
          <img src={Logo} alt="Vidocean Logo" className="h-14 w-24 my-3" />
        </div>
        <div className="flex gap-4 items-center p-2">
          <button>
            <IoIosSearch className="w-6 h-5 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
          <button>
            <FiBell className="w-6 h-5 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
          <button>
            <IoMoonOutline className="w-6 h-5 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
          <button>
            <PiGithubLogo className="w-6 h-5 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
        </div>
      </div>
      <Search />
    </>
  );
};

export default MobileNavBar;

function Search() {
  return (
    <div className="flex gap-2 border border-secondary h-10 items-center rounded-full px-4">
      <input
        type="text"
        className="placeholder:text-gray-400 text-text focus:outline-none bg-transparent w-64 font-ubuntu"
        placeholder="Search"
      />
      <button>
        <IoIosSearch className="h-5 w-5 text-secondary hover:text-primary transition-colors duration-200" />
      </button>
    </div>
  );
}
