import axios from "axios";
import { toast } from "react-toastify";

const getLikes = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { likes },
    } = await axios.get("/api/user/likes", {
      headers: { authorization: token },
    });
    dataDispatch({ type: "SET_LIKES", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

const addToLikes = async (video, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { likes },
    } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: { authorization: token },
      }
    );
    toast.success("Added to Liked Videos");
    dataDispatch({ type: "SET_LIKES", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

const removeFromLikes = async (videoId, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: token },
    });
    toast.success("Removed from Liked Videos");
    dataDispatch({ type: "SET_LIKES", payload: likes });
  } catch (error) {
    console.log(error);
  }
};

export { getLikes, addToLikes, removeFromLikes };
