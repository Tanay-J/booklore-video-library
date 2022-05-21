import axios from "axios";
import { toast } from "react-toastify";

const getPlaylists = async (dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { playlists },
    } = await axios.get("/api/user/playlists", {
      headers: { authorization: token },
    });
    dataDispatch({ type: "GET_PLAYLISTS", payload: playlists });
  } catch (error) {
    console.log(error);
  }
};

const createPlaylist = async (title, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { playlists },
    } = await axios.post(
      "/api/user/playlists",
      { playlist: { title: title, description: "" } },
      {
        headers: { authorization: token },
      }
    );
    toast.success("Playlist created");
    dataDispatch({ type: "GET_PLAYLISTS", payload: playlists });
  } catch (error) {
    toast.error("Try again");
    console.log(error);
  }
};

const addToPlaylist = async (playlistId, video, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { playlist },
    } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: token } }
    );
    toast.success(`Added to ${playlist.title}`);
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
  } catch (error) {
    toast.error("Try again");
    console.log(error);
  }
};

const removeFromPlaylist = async (playlistId, videoId, dataDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const {
      data: { playlist },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: { authorization: token },
    });
    toast.success(`Removed from ${playlist.title}`);
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
  } catch (error) {
    toast.error("Try again");
    console.log(error);
  }
};

const deletePlaylist = async (playlistId, dataDispatch, setIsLoading) => {
  try {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const {
      data: { playlists },
    } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });
    toast.success("Playlist deleted");
    dataDispatch({ type: "GET_PLAYLISTS", payload: playlists });
    setIsLoading(false);
  } catch (error) {
    toast.error("Try again");
    setIsLoading(false);
    console.log(error);
  }
};

export {
  getPlaylists,
  addToPlaylist,
  createPlaylist,
  deletePlaylist,
  removeFromPlaylist,
};
