import { userCancel, userCheck } from "../assets/icons";
import { Eye } from "lucide-react";
import "../styles/UserOptions.scss"
import { useNavigate } from "react-router-dom";

const UserOptions: React.FC<{ id: string }> = ({ id }) => {
  let navigate = useNavigate();
  return (
    <div className="user-options-container">
      <div>
        <ul>
          <li
            onClick={() => {
              navigate(`/dashboard/users/${id}`);
            }}
          >
            <Eye />
            View details
          </li>
          <li>
            <img src={userCancel} alt="remove" />
            Blacklist User
          </li>
          <li>
            <img src={userCheck} alt="add" />
            Activate User
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserOptions