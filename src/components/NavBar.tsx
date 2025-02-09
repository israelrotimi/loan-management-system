import { Search, Bell } from "lucide-react";
import "../styles/NavBar.scss";
import Logo from "../assets/logo.svg";
import dropIcon from "../assets/icons/dropIcon.png";
import { useState } from "react";

// NavBar Component
const NavBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for anything"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="bg-primary search-icon">
            <Search  width={15} />
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#">Docs</a>
        <Bell className="icon" />
        <img
          src="https://randomuser.me/api/portraits/thumb/men/80.jpg"
          alt="User"
        />
        <a href="#">
          Adedeji
          <img src={dropIcon} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
