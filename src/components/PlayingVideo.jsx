import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchFormAPI";
import ReactPlayer from "react-player";
import { RxDotFilled } from "react-icons/rx";
import { SlLike } from "react-icons/sl";

const PlayingVideo = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = () =>
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  return (
    <div className=" flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className=" w-full max-w-[1500px] flex flex-col lg:flex-row">
        <div className=" flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className=" h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          <div className="">
            <div className="">
              <h2 className="text-lg font-ubuntu font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition-colors duration-300">
                {video.title}
              </h2>
            </div>
            <div className=" flex flex-row justify-between">
              <div className=" flex gap-2">
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
                <div className="">
                  <button className="bg-secondary text-primary p-1 rounded-full font-pop">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="  flex">
                <span>
                  <span className="font-pop">
                    <SlLike className="text-sm" />
                    {video?.stats?.likes
                      ? video.stats.likes.toLocaleString()
                      : "No like available"}{" "}
                    Likes
                  </span>
                  <span className="font-pop">
                    {video?.stats?.views
                      ? video.stats.views.toLocaleString()
                      : "No views available"}{" "}
                    views
                  </span>
                </span>
              </div>
            </div>
            <div className=" p-4 text-text bg-primary">
              {video?.description}
            </div>
            <div className="">
              {video.stats.comments} <p>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
