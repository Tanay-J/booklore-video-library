import axios from "axios";
import { getHistory } from "./history-services";
import { getPlaylists } from "./playlist-services";
import { getWatchlater } from "./watchlater-services";

const loginHandler = async (
  loginData,
  dataDispatch,
  setAuthState,
  setToken,
  setErrorMsg,
  location,
  navigate,
  event
) => {
  event.preventDefault();

  try {
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
      navigate(location?.state?.from?.pathname || "/");
    }
  } catch (error) {
    if (error.response.status === 401) {
      setErrorMsg("The credentials you entered are invalid");
    } else console.log(error);
  }
};

const signupHandler = async (signUpData, navigate, setErrorMsg) => {
  try {
    const { status } = await axios.post("/api/auth/signup", signUpData);
    if (status === 201) {
      setErrorMsg("");
      navigate("/login");
    }
  } catch (error) {
    if (error.response.status === 422) {
      setErrorMsg("Email Already Exists.");
    }
  }
};

export { loginHandler, signupHandler };
