import { RxDotFilled } from "react-icons/rx";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { TbDotsVertical } from "react-icons/tb";
import MobileNavBar from "../components/MobileNavBar";
import MobileSideBar from "../components/MobileSideBar";
import { fetchFromAPI } from "../utils/fetchFormAPI";
import { useEffect, useState } from "react";
const youtubeVideos = [
  {
    title: "ReactJS Crash Course 2024",
    channel: "Traversy Media",
    views: "1.2M Views",
    date: "Jan 15, 2024",
    thumbnail: "https://img.youtube.com/vi/1a2b3c4d5e0/0.jpg",
  },
  {
    title: "Learn Tailwind CSS in 30 Minutes",
    channel: "Net Ninja",
    views: "850K Views",
    date: "Feb 10, 2024",
    thumbnail: "https://img.youtube.com/vi/2b3c4d5e6f0/0.jpg",
  },
  {
    title: "JavaScript Async/Await Explained",
    channel: "Web Dev Simplified",
    views: "620K Views",
    date: "Mar 2, 2024",
    thumbnail: "https://img.youtube.com/vi/3c4d5e6f7g1/0.jpg",
  },
  {
    title: "Building a Full Stack App with Next.js",
    channel: "Code with Harry",
    views: "980K Views",
    date: "Apr 5, 2024",
    thumbnail: "https://img.youtube.com/vi/4d5e6f7g8h2/0.jpg",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Each",
    channel: "Dev Ed",
    views: "500K Views",
    date: "May 12, 2024",
    thumbnail: "https://img.youtube.com/vi/5e6f7g8h9i3/0.jpg",
  },
  {
    title: "Building a Blockchain App with Solidity",
    channel: "Dapp University",
    views: "1.5M Views",
    date: "Jun 20, 2024",
    thumbnail: "https://img.youtube.com/vi/6f7g8h9i0j4/0.jpg",
  },
  {
    title: "Vue 3 Tutorial for Beginners",
    channel: "Academind",
    views: "2.1M Views",
    date: "Jul 7, 2024",
    thumbnail: "https://img.youtube.com/vi/7g8h9i0j5k6/0.jpg",
  },
  {
    title: "Introduction to Docker and Kubernetes",
    channel: "Tech With Tim",
    views: "980K Views",
    date: "Aug 3, 2024",
    thumbnail: "https://img.youtube.com/vi/8h9i0j6k7l8/0.jpg",
  },
  {
    title: "Mastering Git and GitHub in 1 Hour",
    channel: "FreeCodeCamp",
    views: "3.2M Views",
    date: "Sep 1, 2024",
    thumbnail: "https://img.youtube.com/vi/9i0j7k8l9m1/0.jpg",
  },
  {
    title: "Node.js REST API with MongoDB",
    channel: "Programming with Mosh",
    views: "2.5M Views",
    date: "Oct 9, 2024",
    thumbnail: "https://img.youtube.com/vi/0j7k8l9m2n3/0.jpg",
  },
];

const Index = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [video, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q={selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <div className="bg-white">
      <NavBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <MobileNavBar />
      <div className=" flex">
        <div className="">
          {openSideBar && (
            <SideBar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </div>
        <div className=" flex flex-col justify-center items-center mx-auto">
          <div className=" text-secondary self-start text-3xl  font-ubuntu ml-4 mt-2">
            Videos
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4">
            {youtubeVideos.map((video) => (
              <Videos key={video.title} video={video} />
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
  return (
    <div className=" border border-secondary flex flex-col rounded-xl gap-1 bg-purple-50  p-2 w-full ">
      <img src={video.thumbnail} alt="" className=" h-48 w-full rounded-xl" />
      <div className=" flex justify-between">
        <h2 className=" text-xl font-ubuntu font-medium">{video.title}</h2>
        <TbDotsVertical className=" mt-1" />
      </div>
      <span className=" font-medium font-pop text-sm"> {video.channel} </span>
      <div className=" flex gap-2 text-xs">
        <span className=" font-pop">{video.views} </span>
        <span>
          <RxDotFilled className=" mt-1" />
        </span>
        <span className=" font-pop">{video.date}</span>
      </div>
    </div>
  );
}
