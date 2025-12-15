import logoImg from "../assets/images/LOGO.png";
import { Link, NavLink } from "react-router";

function Navbar({ openLoginModal }) {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logoImg} alt="logo" />
      </Link>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/AboutPage">News</NavLink>
        <NavLink to="/">Contact</NavLink>{" "} */}
        <button id="NavbarLoginBtn" onClick={openLoginModal}>
          Login / Sign Up
        </button>
      </div>
    </div>
  );
}
export default Navbar;
