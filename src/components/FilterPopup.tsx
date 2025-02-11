import "../styles/FilterPopup.scss";
import { FaCalendarAlt } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const FilterPopup = () => {
  return (
    <div className="filter-popup">
      <h3 className="filter-title">Filter Users</h3>

      <div className="filter-group">
        <label>Organization</label>
        <div className="select-box">
          <select>
            <option>Select</option>
            <option>Org 1</option>
            <option>Org 2</option>
          </select>
          <ChevronDown size={16} className="icon" />
        </div>
      </div>

      <div className="filter-group">
        <label>Username</label>
        <input type="text" placeholder="User" />
      </div>

      <div className="filter-group">
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>

      <div className="filter-group">
        <label>Date</label>
        <div className="date-picker">
          <input type="date" />
          <FaCalendarAlt size={16} className="icon" />
        </div>
      </div>

      <div className="filter-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number" />
      </div>

      <div className="filter-group">
        <label>Status</label>
        <div className="select-box">
          <select>
            <option>Select</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <ChevronDown size={16} className="icon" />
        </div>
      </div>

      <div className="filter-actions">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default FilterPopup;
