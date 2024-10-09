import { IoMicOutline, IoMoonOutline } from "react-icons/io5";
import Logo from "../assets/Vidocean.png";
import { IoIosSearch } from "react-icons/io";
const NavBar = () => {
  return (
    <div className=" flex justify-between">
      <div className="">
        <img src={Logo} alt="Vidocean Logo" className="h-16 w-28" />
      </div>
      <div className=" flex">
        <div className=" flex gap-2 border  border-secondary w-1/2 bg-primary">
          <input type="text" className=" bg-primary" />
          <IoIosSearch />
        </div>
        <div className="">
          <IoMicOutline />
        </div>
      </div>
      <div className="">
        <IoMoonOutline />
      </div>
    </div>
  );
};

export default NavBar;
