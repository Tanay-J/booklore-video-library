import axios from "axios";
import { useEffect, useState } from "react";

const getVideos = (category) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(async () => {
    try {
      const {
        data: { videos },
      } = await axios.get("/api/videos");

      if (category) {
        const filteredVideos = videos.filter(
          (video) => video.category === category
        );
        setVideoList(filteredVideos);
      } else setVideoList(videos);
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  return { videoList };
};
export { getVideos };
