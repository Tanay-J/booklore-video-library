import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useAuth } from "contexts/auth-context";
import { loginHandler } from "utils/service-requests/auth-services";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import styles from "./auth.module.css";
import { useData } from "contexts/data-context";

const Login = () => {
  const {
    authState: { isAuthenticated },
    setAuthState,
  } = useAuth();
  const { dataDispatch } = useData();

  const [token, setToken] = useLocalStorage("token", "");

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [inputType, setInputType] = useState("password");

  const location = useLocation();
  const navigate = useNavigate();

  const userInputHandler = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setLoginData({ ...loginData, email: value });
    } else if (id === "password") {
      setLoginData({ ...loginData, password: value });
    }
  };
  const setGuestLogin = (e) => {
    e.preventDefault();
    setLoginData({ email: "tj@gmail.com", password: "tanay123" });
  };

  return (
    <>
      <div className="wrapper mx-auto my-m">
        {!isAuthenticated && (
          <main
            className={`${styles.auth_container} card-shadow p-m mx-auto br-m`}
          >
            <h6 className="h6 mx-auto my-s">Log In</h6>

            <form className={`${styles.form} mx-auto p-s`}>
              <div className="flex flex-col">
                <label className="my-xs" htmlFor="email">
                  <small>Username</small>
                  <span className="text-danger"> *</span>
                </label>
                <input
                  id="email"
                  value={loginData.email}
                  className={`${styles.auth_input} p-xs br-s`}
                  onChange={userInputHandler}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <label className="required my-xs" htmlFor="password">
                  <small>Password </small>
                  <span className="text-danger"> *</span>
                </label>
                <div className={`${styles.auth_input_container} br-s`}>
                  <input
                    id="password"
                    value={loginData.password}
                    className={`${styles.auth_input_password} p-xs `}
                    type={inputType}
                    onChange={userInputHandler}
                    required
                    placeholder="**********"
                  />
                  {inputType === "password" ? (
                    <BsEyeFill onClick={() => setInputType("text")} />
                  ) : (
                    <BsEyeSlashFill onClick={() => setInputType("password")} />
                  )}
                </div>
              </div>
              <div className="flex flex-wrap justify-content-space-bet gap-2 my-xs">
                <div>
                  <input type="checkbox" />
                  <small>Remember Me</small>
                </div>
                <div>
                  <Link to="/login" className="link font-bold">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
              </div>
              {errorMsg && (
                <p className="text-danger text-center">{errorMsg}</p>
              )}
              <div className="flex flex-col">
                {loginData.email && loginData.password ? (
                  <button
                    className="btn btn-primary my-m"
                    onClick={(event) => {
                      loginHandler(
                        loginData,
                        dataDispatch,
                        setAuthState,
                        setToken,
                        setErrorMsg,
                        location,
                        navigate,
                        event
                      );
                    }}
                  >
                    Log In
                  </button>
                ) : (
                  <button
                    className="btn btn-primary my-m"
                    title="Email and Password can't be empty"
                    disabled
                  >
                    Log In
                  </button>
                )}

                <button className="btn btn-outline outline-primary">
                  <Link to="/signup" className="link">
                    Sign Up
                  </Link>
                </button>

                <button
                  className="btn btn-outline outline-primary my-m"
                  onClick={setGuestLogin}
                >
                  Log In as Guest
                </button>
              </div>
            </form>
          </main>
        )}

        {isAuthenticated && (
          <div className="text-center">
            <h2 className="my-s">You're now logged in</h2>
            <Link to="/" className="link ny-s">
              <button className="btn btn-primary">Go to Home</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export { Login };
