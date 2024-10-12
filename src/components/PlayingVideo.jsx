import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchFormAPI";

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
  return <div>PlayingVideo</div>;
};

export default PlayingVideo;
