import axios from "axios";
import { toast } from "react-toastify";

const getHistory = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { history },
    } = await axios.get("/api/user/history", {
      headers: { authorization: token },
    });

    dataDispatch({ type: "SET_HISTORY", payload: history });
  } catch (error) {
    console.log(error);
  }
};

const addToHistory = async (video, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { history },
    } = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: { authorization: token },
      }
    );

    dataDispatch({ type: "SET_HISTORY", payload: history });
  } catch (error) {
    console.log(error);
  }
};

const removeFromHistory = async (videoId, dataDispatch, setIsLoading) => {
  try {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: token },
    });
    toast.success("Removed from History");
    dataDispatch({ type: "SET_HISTORY", payload: history });
    setIsLoading(false);
  } catch (error) {
    toast.error("Try again");
    setIsLoading(false);
    console.log(error);
  }
};

const clearHistory = async (dataDispatch, setIsLoading) => {
  try {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const {
      data: { history },
    } = await axios.delete("/api/user/history/all", {
      headers: { authorization: token },
    });
    toast.success("History cleared");
    dataDispatch({ type: "SET_HISTORY", payload: history });
    setIsLoading(false);
  } catch (error) {
    toast.error("Try again");
    setIsLoading(false);
    console.log(error);
  }
};

export { getHistory, addToHistory, removeFromHistory, clearHistory };
