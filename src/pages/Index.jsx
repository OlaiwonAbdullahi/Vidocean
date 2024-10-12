import { RxDotFilled } from "react-icons/rx";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { TbDotsVertical } from "react-icons/tb";
import MobileNavBar from "../components/MobileNavBar";
import MobileSideBar from "../components/MobileSideBar";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import MobileOverFlow from "../components/MobileOverFlow";

const Index = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { loading, data } = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <div className="bg-white">
      <NavBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <MobileNavBar />
      <MobileOverFlow />
      <div className=" flex">
        <div className="">{openSideBar && <SideBar />}</div>
        <div className=" flex flex-col justify-center items-center mx-auto">
          {loading && <Loading />}
          <div className=" text-secondary self-start text-3xl  font-ubuntu ml-4 mt-2">
            {loading ? "Loading Videos" : "All Videos"}
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
    <Link to={`/video/${video?.videoId}`} className="block group">
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
        {/* Video Thumbnail */}
        <img
          src={video.thumbnails[0].url}
          alt={video.title}
          className="h-48 w-full object-cover"
        />

        {/* Video Details */}
        <div className="p-4">
          {/* Video Title */}
          <h2 className="text-lg font-ubuntu font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition-colors duration-300">
            {video.title}
          </h2>

          {/* Video Author */}
          <div className="flex items-center mt-2 space-x-2">
            <img
              src={video.author.avatar[0].url}
              alt={video.author.title}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-pop font-medium text-gray-700">
              {video.author.title}
            </span>
          </div>

          {/* Video Stats */}
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <span className="font-pop">
              {video?.stats?.views
                ? video.stats.views.toLocaleString()
                : "No views available"}{" "}
              views
            </span>
            <RxDotFilled className="mx-1 text-gray-400" />
            <span className="font-pop">{video.publishedTimeText}</span>
          </div>
        </div>

        {/* Vertical dots icon for additional options */}
        <TbDotsVertical className="absolute top-2 right-2 h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors duration-300" />
      </div>
    </Link>
  );
}
