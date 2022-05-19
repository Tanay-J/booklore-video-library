import axios from "axios";
import { toast } from "react-toastify";

const getWatchlater = async (dataDispatch) => {
  const token = localStorage.getItem("token");
  const {
    data: { watchlater },
  } = await axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
  dataDispatch({ type: "SET_WATCHLATER", payload: watchlater });
};

const addToWatchLater = async (video, dataDispatch) => {
  const token = localStorage.getItem("token");
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: { authorization: token },
      }
    );
    toast.success("Added to Watch later");
    dataDispatch({ type: "SET_WATCHLATER", payload: watchlater });
  } catch (error) {
    toast.error("Try again");
    console.log(error);
  }
};

const removeFromWatchLater = async (videoId, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization: token },
    });
    toast.success("Removed from Watch later");
    dataDispatch({ type: "SET_WATCHLATER", payload: watchlater });
  } catch (error) {
    toast.error("Try again");
  }
};

export { getWatchlater, addToWatchLater, removeFromWatchLater };
