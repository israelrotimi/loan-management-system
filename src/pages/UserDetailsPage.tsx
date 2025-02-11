import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import UserDetails from "../components/UserDetails";
import { Suspense, useEffect, useState } from "react";
import { fetchUsers, User } from "../utils/apiUtils";

const UserDetailsPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const users = await fetchUsers(); // Fetch all users
        const foundUser = users.find((user: User) => user.id === Number(id)); // Filter user by ID
        if (foundUser) {
          localStorage.setItem("selectedUser", JSON.stringify(foundUser)); 
          setUser(foundUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (id) {
      const storedUser = localStorage.getItem("selectedUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); 
      } else {
        getUserById();
      }
    }
  }, [id]);

  return (
    <div>
      <NavBar />
      <SideBar />
      <Suspense fallback={<div>Loading...</div>}>
        {user ? (
          <UserDetails user={user} />
        ) : (
          <div
            style={{
              padding: "10px",
              backgroundColor: "#ffdfdf",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: "20%",
              right: "50%",
            }}
          >
            User not found
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default UserDetailsPage;
