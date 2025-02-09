import { FaAngleDown } from "react-icons/fa";
import { sideNavItems } from "../data";
import "../styles/SideBar.scss";

const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
      {sideNavItems.map(({id, text, icon}) => (
          icon ? (
            <li key={id} className={text === "Users" ? "active" : ""}>
              <a href="#">
              <img src={icon} />
                {text}
                {id === 1 && <FaAngleDown />}
              </a>
            </li>
          ) : (
            <li key={id} className="important-text">
              {text}
            </li>
          )
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
