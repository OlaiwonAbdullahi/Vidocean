import { CgGym } from "react-icons/cg";
import { GiClothes } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";
import {
  IoBookOutline,
  IoMusicalNotesOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const MobileOverFlow = () => {
  return (
    <div className=" w-full overflow-scroll md:hidden flex">
      <div className=" flex gap-3">
        <button className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoBookOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium whitespace-nowrap">
            Education
          </span>
        </button>

        <button className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoVideocamOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium whitespace-nowrap">
            Entertainment
          </span>
        </button>

        <button className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoMusicalNotesOutline className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium whitespace-nowrap">
            {" "}
            Music & Dance
          </span>
        </button>

        <button className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <IoIosLaptop className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium whitespace-nowrap">
            {" "}
            Tech Reviews{" "}
          </span>
        </button>

        <button className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <CgGym className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium whitespace-nowrap">
            {" "}
            Health & Fitness
          </span>
        </button>
        <button className="flex items-center p-2 gap-1.5 bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
          <GiClothes className="h-5 w-5 text-secondary" />
          <span className="text-sm font-ubuntu font-medium  whitespace-nowrap">
            {" "}
            Beauty & Fashion
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileOverFlow;
