import { useEffect, useState } from "react";
import axios from "axios";

const getVideos = (category, setIsLoading) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
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
        toast.error("Something went wrong, try again!");
        throw new Error(error);
      } finally {
        setIsLoading(false);
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
        toast.error("Something went wrong, try again!");
        throw new Error(error);
      }
    })();
  }, []);

  return { categories };
};

export { getVideos, getCategories };
