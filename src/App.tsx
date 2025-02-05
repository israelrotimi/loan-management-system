// setup react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/dashboard/users" element={<Dashboard />}></Route>
        <Route path="dashboard/users/:id" element={<User />}></Route> */}
      </Routes>
  </Router>
  );
}

export default App
