import axios from "axios";

const loginHandler = async (
  loginData,
  setAuthState,
  setToken,
  setUserData,
  setErrorMsg,
  location,
  navigate,
  event
) => {
  event.preventDefault();

  try {
    const { status, data } = await axios.post("/api/auth/login", loginData);

    if (status === 200) {
      setToken("token", data.encodedToken);
      setUserData("userData", data.user);
      setAuthState({
        isAuthenticated: true,
        userData: data.user,
        token: data.encodedToken,
      });

      navigate(location?.state?.from?.pathname || "/");
    } else if (status === 201) {
      setErrorMsg("The credentials you entered are invalid");
    }
  } catch (error) {
    console.log(error);
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
