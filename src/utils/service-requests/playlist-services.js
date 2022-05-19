import axios from "axios";

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
    dataDispatch({ type: "GET_PLAYLISTS", payload: playlists });
  } catch (error) {
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
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
  } catch (error) {
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
    dataDispatch({ type: "UPDATE_PLAYLIST", payload: playlist });
  } catch (error) {
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
    dataDispatch({ type: "GET_PLAYLISTS", payload: playlists });
    setIsLoading(false);
  } catch (error) {
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
