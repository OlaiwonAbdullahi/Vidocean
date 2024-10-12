import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchFormAPI";
import ReactPlayer from "react-player";
import { RxDotFilled } from "react-icons/rx";

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
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
