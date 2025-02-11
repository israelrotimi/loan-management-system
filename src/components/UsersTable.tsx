import React, { useState, useEffect, useRef } from "react";
import "../styles/UsersTable.scss";
import { User } from "../utils/apiUtils";
import { FaFilter } from "react-icons/fa";
import UserOptions from "./UserOptions.tsx";

const UsersTable: React.FC<{ users: User[] }> = ({ users }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // Track active menu popup
  const menuRef = useRef<HTMLTableRowElement | null>(null); // Track the menu reference

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Number of rows per page

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index); // Toggle menu on click
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);


  // Badge styling based on status
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "badge active";
      case "inactive":
        return "badge inactive";
      case "pending":
        return "badge pending";
      case "blacklisted":
        return "badge blacklisted";
      default:
        return "badge";
    }
  };

  return (
    <div className="users-table-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>ORGANIZATION <FaFilter /></th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index} ref={activeMenu === index ? menuRef : null}  style={{position: "relative"}}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone_no}</td>
              <td>{new Date(user.date_joined).toLocaleString()}</td>
              <td>
                <span className={getStatusClass(user.status)}>{user.status}</span>
              </td>
              <td>
                <button className="menu-btn" onClick={() => toggleMenu(index)}>⋮</button>
                {activeMenu === index && (<UserOptions id={index.toString()} />)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
<div className="pagination">
  <span>Showing {usersPerPage} out of {users.length}</span>
  <div className="pagination-controls">
    {totalPages > 1 && (
      <>
        <button 
          style={{padding: '5px', borderRadius: '2px', background: '#aee9ff'}}
          onClick={() => (currentPage > 1 && paginate(currentPage - 1))}
        >
          &lt;
        </button>
        {/* First two pages */}
        <button 
          className={currentPage === 1 ? "active" : ""}
          onClick={() => paginate(1)}
        >
          1
        </button>
        {totalPages > 1 && (
          <button 
            className={currentPage === 2 ? "active" : ""}
            onClick={() => paginate(2)}
          >
            2
          </button>
        )}

        {/* Show "..." if necessary */}
        {currentPage > 5 && <span>...</span>}

        {/* Current page and next 3 pages */}
        {Array.from({ length: 4 }, (_, i) => currentPage + i)
          .filter(page => page > 2 && page <= totalPages)
          .map(page => (
            <button 
              key={page} 
              className={currentPage === page ? "active" : ""}
              onClick={() => paginate(page)}
            >
              {page}
            </button>
          ))
        }

        {/* Show "..." if necessary */}
        {currentPage + 3 < totalPages && <span>...</span>}

        {/* Last page (if not already shown) */}
        {totalPages > 2 && (
          <button 
            className={currentPage === totalPages ? "active" : ""}
            onClick={() => paginate(totalPages)}
          >
            {totalPages}
          </button>
          
        )}
        <button 
          style={{padding: '5px', borderRadius: '2px', background: '#aee9ff'}}
          onClick={() => (currentPage < totalPages && paginate(currentPage + 1))}
        >
          &gt;
        </button>
      </>
    )}
  </div>
</div>
    </div>
  );
};

export default UsersTable;
