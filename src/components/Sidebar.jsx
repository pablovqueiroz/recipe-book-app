import { Link, NavLink } from "react-router";
import RecipeList from "../components/RecipeList";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <Link to="/">
            <li>🏠 Home</li>
          </Link>

          <Link to="/ProfilePage">
            <li>👤Profile</li>
          </Link>

          <Link to="/Favorites">
            <li>⭐Favorites</li>
          </Link>

           <Link to="/Collaborate">
            <li>📖 Collaborate</li>
          </Link>

          <Link to="/Contactpage">
            <li>🗣️ Contact</li>
          </Link>


          <Link to="/About">
            <li>💬About Us</li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
