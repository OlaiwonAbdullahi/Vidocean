import { RxDotFilled } from "react-icons/rx";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
const youtubeVideos = [
  {
    title: "ReactJS Crash Course 2024",
    channel: "Traversy Media",
    views: "1.2M",
    date: "Jan 15, 2024",
    thumbnail: "https://img.youtube.com/vi/1a2b3c4d5e0/0.jpg",
  },
  {
    title: "Learn Tailwind CSS in 30 Minutes",
    channel: "Net Ninja",
    views: "850K",
    date: "Feb 10, 2024",
    thumbnail: "https://img.youtube.com/vi/2b3c4d5e6f0/0.jpg",
  },
  {
    title: "JavaScript Async/Await Explained",
    channel: "Web Dev Simplified",
    views: "620K",
    date: "Mar 2, 2024",
    thumbnail: "https://img.youtube.com/vi/3c4d5e6f7g1/0.jpg",
  },
  {
    title: "Building a Full Stack App with Next.js",
    channel: "Code with Harry",
    views: "980K",
    date: "Apr 5, 2024",
    thumbnail: "https://img.youtube.com/vi/4d5e6f7g8h2/0.jpg",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Each",
    channel: "Dev Ed",
    views: "500K",
    date: "May 12, 2024",
    thumbnail: "https://img.youtube.com/vi/5e6f7g8h9i3/0.jpg",
  },
  {
    title: "Building a Blockchain App with Solidity",
    channel: "Dapp University",
    views: "1.5M",
    date: "Jun 20, 2024",
    thumbnail: "https://img.youtube.com/vi/6f7g8h9i0j4/0.jpg",
  },
  {
    title: "Vue 3 Tutorial for Beginners",
    channel: "Academind",
    views: "2.1M",
    date: "Jul 7, 2024",
    thumbnail: "https://img.youtube.com/vi/7g8h9i0j5k6/0.jpg",
  },
  {
    title: "Introduction to Docker and Kubernetes",
    channel: "Tech With Tim",
    views: "980K",
    date: "Aug 3, 2024",
    thumbnail: "https://img.youtube.com/vi/8h9i0j6k7l8/0.jpg",
  },
  {
    title: "Mastering Git and GitHub in 1 Hour",
    channel: "FreeCodeCamp",
    views: "3.2M",
    date: "Sep 1, 2024",
    thumbnail: "https://img.youtube.com/vi/9i0j7k8l9m1/0.jpg",
  },
  {
    title: "Node.js REST API with MongoDB",
    channel: "Programming with Mosh",
    views: "2.5M",
    date: "Oct 9, 2024",
    thumbnail: "https://img.youtube.com/vi/0j7k8l9m2n3/0.jpg",
  },
];

const Index = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <div className=" flex">
        <div className="">
          <SideBar />
        </div>
        <div className="">
          {youtubeVideos.map((video) => (
            <Videos key={video.title} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

function Videos({ video }) {
  return (
    <div className="">
      <img src={video.thumbnail} alt="" className=" h-30 w-72" />
      <h2 className=" text-xl font-ubuntu font-medium">{video.title}</h2>
      <span className=" font-medium"> {video.channel} </span>
      <div className=" flex gap-2">
        <span className="">{video.views} </span>
        <span>
          <RxDotFilled />
        </span>
        <span>{video.date}</span>
      </div>
    </div>
  );
}
