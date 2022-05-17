const { Login } = require("components/auth");
const { Navbar } = require("components/navigation");

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
};
export { LoginPage };
