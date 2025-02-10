import { Suspense } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import UsersSummary from "../components/UsersSummary";

const Dashboard = () => {

  return (
    <>
      <NavBar />
      <SideBar />
       <Suspense fallback={<div>Loading...</div>}>
       <UsersSummary/>
       </Suspense>
    </>
  );
};

export default Dashboard;
