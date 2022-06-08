import axios from "axios";
import { toast } from "react-toastify";
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
      toast.success("Logged in successfully");
      setAuthState({
        isAuthenticated: true,
        token: data.encodedToken,
      });
      getWatchlater(dataDispatch);
      getPlaylists(dataDispatch);
      getHistory(dataDispatch);
      getLikes(dataDispatch);
      navigate(location?.state?.from?.pathname || "/");
    }
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Invalid credentials");
      setErrorMsg("The credentials you entered are invalid");
    } else throw new Error(error);
  } finally {
    setIsLoading(false);
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
      toast.success("Signed Up Successfully");
      setErrorMsg("");
      navigate("/login");
    }
  } catch (error) {
    if (error.response.status === 422) {
      toast.error("Email already exists");
      setErrorMsg("Email already exists");
    } else throw new Error(error);
  } finally {
    setIsLoading(false);
  }
};

export { loginHandler, signupHandler };
