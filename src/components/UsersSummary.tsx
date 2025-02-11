import maleFemale from "../assets/icons/male-female.png";
import groupUsers from "../assets/icons/group-users.png";
import database from "../assets/icons/database.png";
import document from "../assets/icons/document.png";
import "../styles/UserSummary.scss";

import { fetchUsers } from "../utils/apiUtils";
import { useEffect, useState } from "react";



const UsersSummary = () => {
  const [userSummary, setUserSummary] = useState({
    totalUsers: 0,
    activeUsers: 0,
    usersWithLoans: 0,
    usersWithSavings: 0
  })
  
  useEffect(() => {
    const calculateUserStats = async () => {
      const data = await fetchUsers()
      setUserSummary({
        totalUsers: data.length,
        activeUsers: data.filter(user => user.status.toLowerCase() === 'active').length,
        usersWithLoans: data.filter(user => user.loan_amount > 0).length,
        usersWithSavings: data.filter(user => user.savings > 0).length,
      })
    }
    calculateUserStats()
  }, [])

  const { totalUsers, activeUsers, usersWithLoans, usersWithSavings } = userSummary

  return (
    <div className="user-summary-container">
      <h2>Users</h2>
      <div className="row">
        <div className="user-card">
          <img src={maleFemale} alt="" />
          <p className="important-text">Users</p>
          <h2>{totalUsers}</h2>
        </div>
        <div className="user-card">
          <img src={groupUsers} alt="" />
          <p className="important-text">Active Users</p>
          <h2>{activeUsers}</h2>
        </div>
        <div className="user-card">
          <img src={document} alt="" />
          <p className="important-text">Users with Loans</p>
          <h2>{usersWithLoans}</h2>
        </div>
        <div className="user-card">
          <img src={database} alt="" />
          <p className="important-text">Users with Savings</p>
          <h2>{usersWithSavings}</h2>
        </div>
      </div>
    </div>
  );
};

export default UsersSummary;