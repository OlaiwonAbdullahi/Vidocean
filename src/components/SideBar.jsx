import { CgPlayList } from "react-icons/cg";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TbSmartHome } from "react-icons/tb";

const SideBar = () => {
  return (
    <div>
      <div className="">
        <TbSmartHome />
        <span>Home</span>
      </div>
      <div className="">
        <CgPlayList />
        <span>PlayList</span>
      </div>
      <div className="">
        <IoMusicalNotesOutline />
        <span>Music</span>
      </div>
    </div>
  );
};

export default SideBar;
