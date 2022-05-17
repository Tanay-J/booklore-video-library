import { useEffect, useState } from "react";
import axios from "axios";

const getVideos = (category) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    (async () => {
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
    })();
  }, [category]);

  return { videoList };
};

const getCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { categories };
};

export { getVideos, getCategories };
