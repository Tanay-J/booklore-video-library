import axios from "axios";
import { getHistory } from "./history-services";
import { getLikes } from "./likes-services";
import { getPlaylists } from "./playlist-services";
import { getWatchlater } from "./watchlater-services";

const loginHandler = async (
  loginData,
  dataDispatch,
  setAuthState,
  setToken,
  setErrorMsg,
  setIsLoading,
  location,
  navigate,
  event
) => {
  event.preventDefault();

  try {
    setIsLoading(true);
    const { status, data } = await axios.post("/api/auth/login", loginData);
    if (status === 200) {
      setToken(data.encodedToken);
      setAuthState({
        isAuthenticated: true,
        token: data.encodedToken,
      });
      getWatchlater(dataDispatch);
      getPlaylists(dataDispatch);
      getHistory(dataDispatch);
      getLikes(dataDispatch);
      setIsLoading(false);
      navigate(location?.state?.from?.pathname || "/");
    }
  } catch (error) {
    setIsLoading(false);
    if (error.response.status === 401) {
      setErrorMsg("The credentials you entered are invalid");
    } else console.log(error);
  }
};

const signupHandler = async (
  signUpData,
  navigate,
  setErrorMsg,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    const { status } = await axios.post("/api/auth/signup", signUpData);
    if (status === 201) {
      setErrorMsg("");
      setIsLoading(false);
      navigate("/login");
    }
  } catch (error) {
    setIsLoading(false);
    if (error.response.status === 422) {
      setErrorMsg("Email Already Exists.");
    } else console.log(error);
  }
};

export { loginHandler, signupHandler };
