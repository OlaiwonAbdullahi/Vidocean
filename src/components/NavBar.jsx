import { IoMicOutline } from "react-icons/io5";
import Logo from "../assets/Vidocean.png";
import { IoIosSearch } from "react-icons/io";
const NavBar = () => {
  return (
    <div>
      <div className="">
        <img src={Logo} alt="" />
      </div>
      <div className="">
        <div className=" flex gap-2 p-1 border  border-secondary">
          <input type="text" />
          <IoIosSearch />
        </div>
        <div className="">
          <IoMicOutline />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default NavBar;
