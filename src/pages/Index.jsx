import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { TbDotsVertical } from "react-icons/tb";
import MobileNavBar from "../components/MobileNavBar";
import MobileSideBar from "../components/MobileSideBar";
import { fetchFromAPI } from "../utils/fetchFormAPI";
import { useEffect, useState } from "react";

// Dummy data for fallback purposes
const youtubeVideos = [
  {
    title: "ReactJS Crash Course 2024",
    channel: "Traversy Media",
    views: "1.2M Views",
    date: "Jan 15, 2024",
    thumbnail: "https://img.youtube.com/vi/1a2b3c4d5e0/0.jpg",
  },
  //... other videos
];

const Index = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        if (data && data.items) {
          setVideos(data.items);
        } else {
          setVideos([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="bg-white">
      <NavBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <MobileNavBar />
      <div className="flex">
        {openSideBar && (
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="text-secondary self-start text-3xl font-ubuntu ml-4 mt-2">
            Videos
          </div>

          {loading ? (
            <div className="text-lg font-ubuntu mt-8">Loading videos...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4">
              {videos.length > 0 ? (
                videos.map((video) => (
                  <Videos key={video.id.videoId} video={video} />
                ))
              ) : (
                <div className="text-lg font-ubuntu">No videos found.</div>
              )}
            </div>
          )}
        </div>
      </div>
      <MobileSideBar />
    </div>
  );
};

export default Index;

const Videos = ({ video }) => {
  return (
    <div className="border border-secondary flex flex-col rounded-xl gap-1 bg-purple-50 p-2 w-full">
      <img
        src={video.snippet?.thumbnails?.medium?.url}
        alt=""
        className="h-48 w-full rounded-xl"
      />
      <div className="flex justify-between">
        <h2 className="text-xl font-ubuntu font-medium">
          {video.snippet?.title}
        </h2>
        <TbDotsVertical className="mt-1" />
      </div>
      <span className="font-medium font-pop text-sm">
        {video.snippet?.channelTitle}
      </span>
      <div className="flex gap-2 text-xs">
        <span className="font-pop">
          {video.snippet?.publishedAt.split("T")[0]}
        </span>
      </div>
    </div>
  );
};
