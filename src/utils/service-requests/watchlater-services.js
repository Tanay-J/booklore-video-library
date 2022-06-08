import axios from "axios";
import { toast } from "react-toastify";

const getWatchlater = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { watchlater },
    } = await axios.get("/api/user/watchlater", {
      headers: { authorization: token },
    });
    dataDispatch({ type: "SET_WATCHLATER", payload: watchlater });
  } catch (error) {
    toast.error("Something went wrong, try again!");
    throw new Error(error);
  }
};

const addToWatchLater = async (video, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
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
    toast.error("Something went wrong, try again!");
    throw new Error(error);
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
    toast.error("Something went wrong, try again!");
    throw new Error(error);
  }
};

export { getWatchlater, addToWatchLater, removeFromWatchLater };
