import logoImg from "../assets/images/LOGO.png"
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">  
      <img src={logoImg} alt="logo"/>
      </Link>
      <div className="nav-links">
        <NavLink to= "/">Home</NavLink>
        <NavLink to= "/AboutPage">News</NavLink>
        <NavLink to= "/">Contact</NavLink> {/********************** ALTERAR LINK ***********/}
        <NavLink to= "/login"><span>Sign up / Login</span></NavLink>
    </div>
    </div>
  );
}
export default Navbar;
