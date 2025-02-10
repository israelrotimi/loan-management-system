// setup react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetailsPage from "./pages/UserDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard/users" element={<Dashboard />}></Route>
        <Route path="dashboard/users/:id" element={<UserDetailsPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
