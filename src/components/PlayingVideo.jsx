import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchFormAPI";
import ReactPlayer from "react-player";
import { SlLike } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import NavBar from "../components/NavBar";
import SugestedVideos from "./SugestedVideos";

const PlayingVideo = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchData(`video/details/?id=${id}`)
      .then((res) => {
        console.log(res);
        setVideo(res);
      })
      .catch((err) => {
        console.error("Error fetching video details:", err);
      });
  }, [id]);

  const fetchRelatedVideos = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
    });
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-[calc(100%-56px)] mt-2">
        <div className="w-full max-w-[1500px] flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
            <div className="h-[200px] md:h-[400px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
              <ReactPlayer
                className="rounded-xl"
                url={`https://www.youtube.com/watch?v=${id}`}
                height="400px"
                width="100%"
                controls
                style={{ backgroundColor: "#000000", borderRadius: "12px" }}
                playing={true}
              />
            </div>

            {/* Only render content if the video data is available */}
            {video && (
              <div>
                <div>
                  <h2 className="text-lg mt-52 md:mt-0 font-ubuntu font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition-colors duration-300">
                    {video?.title || "No title available"}
                  </h2>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex gap-2">
                    <div className="flex items-center mt-2 space-x-2">
                      {video?.author && video?.author?.avatar?.length > 0 && (
                        <img
                          src={video?.author?.avatar[0]?.url || ""}
                          alt={video?.author?.title || "No author"}
                          className="h-8 w-8 rounded-full"
                        />
                      )}
                      <span className="text-sm font-pop font-medium text-gray-700">
                        {video?.author?.title || "No author available"}
                      </span>
                    </div>
                    <div>
                      <button className="bg-secondary text-primary p-1 rounded-full font-pop h-10 w-24 text-sm">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-pop flex gap-2 text-sm">
                      <SlLike className="h-5 w-5" />
                      {video?.stats?.likes
                        ? video.stats.likes.toLocaleString()
                        : "No likes available"}{" "}
                      Likes
                    </span>
                    <span className="font-pop flex gap-2 text-sm">
                      <IoEyeOutline className="h-5 w-5" />
                      {video?.stats?.views
                        ? video.stats.views.toLocaleString()
                        : "No views available"}{" "}
                      views
                    </span>
                  </div>
                </div>
                <br></br>
                <div className="p-4 text-text bg-primary font-pop text-sm rounded-lg">
                  {video?.description || "No description available"}
                </div>
                <div className="flex text-text font-semibold gap-2 font-ubuntu">
                  {video?.stats?.comments || "No comments available"}{" "}
                  <p>Comments</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="">{/*  <SugestedVideos />*/}</div>
      </div>
    </div>
  );
};

export default PlayingVideo;
