import { LOGO_ULR } from "../utils/constants";
import { use, useState } from "react";
const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_ULR} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              btnLogin === "Login"
                ? setbtnLogin("Logout")
                : setbtnLogin("Login")
            }
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
