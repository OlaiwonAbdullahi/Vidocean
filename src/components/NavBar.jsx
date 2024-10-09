import { IoMicOutline, IoMoonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { FaCircle } from "react-icons/fa6";
import Logo from "../assets/Vidocean.png";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center  top-0 sticky border-b border-b-primary">
      <div className="flex justify-between items-center w-4/5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Vidocean Logo" className="h-14 w-24 my-3" />
        </div>

        {/* Search Bar */}
        <div className="flex gap-3">
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
          <button>
            <IoMicOutline className="h-7 w-7 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex gap-4 items-center p-2">
          <button>
            <IoMoonOutline className="w-7 h-6 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
          <button>
            <FiBell className="w-7 h-6 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
          <button>
            <FaCircle className="w-7 h-6 text-secondary hover:text-primary transition-colors duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
