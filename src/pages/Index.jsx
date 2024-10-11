import { RxDotFilled } from "react-icons/rx";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { TbDotsVertical } from "react-icons/tb";
import MobileNavBar from "../components/MobileNavBar";
import MobileSideBar from "../components/MobileSideBar";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

const Index = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { loading, data } = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <div className="bg-white">
      <NavBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <MobileNavBar />
      <div className=" flex">
        <div className="">{openSideBar && <SideBar />}</div>
        <div className=" flex flex-col justify-center items-center mx-auto">
          <div className=" text-secondary self-start text-3xl  font-ubuntu ml-4 mt-2">
            Videos
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4">
            {data.map((item) => (
              <Videos key={item.id} video={item?.video} />
            ))}
          </div>
        </div>
      </div>
      <MobileSideBar />
    </div>
  );
};

export default Index;

function Videos({ video }) {
  console.log(video);
  return (
    <div className=" border border-secondary flex flex-col rounded-xl gap-1 bg-purple-50  p-2 w-full ">
      <img
        src={video.thumbnails[0].url}
        alt=""
        className=" h-48 w-full rounded-xl"
      />
      <div className=" flex justify-between">
        <img
          src={video.author.avatar[0].url}
          alt=""
          className=" h-7 w-7 mt-1 mr-2 rounded-full"
        />
        <h2 className=" text-lg font-ubuntu font-medium">{video.title}</h2>
        <TbDotsVertical className=" mt-1 h-8 w-8" />
      </div>

      <span className=" font-medium font-pop text-sm">
        {" "}
        {video.author.title}{" "}
      </span>
      <div className=" flex gap-2 text-xs">
        <span className=" font-pop">
          {video?.stats?.views
            ? video.stats.views.toLocaleString()
            : "No views available"}{" "}
          views{" "}
        </span>
        <span>
          <RxDotFilled className=" mt-1" />
        </span>
        <span className=" font-pop">{video.publishedTimeText}</span>
      </div>
    </div>
  );
}
