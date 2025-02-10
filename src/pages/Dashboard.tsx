import { Suspense, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import UsersSummary from "../components/UsersSummary";
import UsersTable from "../components/UsersTable";
import { fetchUsers, User } from "../utils/getUsers";

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(()=> {
    const getUsers = async () => {
      try {
        const result = await fetchUsers()
        setUsers(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getUsers()
  }, [])

  return (
    <div>
      <NavBar />
      <SideBar />
       <Suspense fallback={<div>Loading...</div>}>
        <UsersSummary/>
       </Suspense>
       <Suspense fallback={<div>Loading...</div>}>
        <UsersTable users={users} />
       </Suspense>
    </div>
  );
};

export default Dashboard;
