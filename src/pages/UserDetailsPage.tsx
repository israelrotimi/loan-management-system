import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import UserDetails from "../components/UserDetails"
import { Suspense, useEffect, useState } from "react"
import { fetchUser, User } from "../utils/getUsers"

const UserDetailsPage = () => {
  const [user, setUser] = useState<User | null>()
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    const getUserById = async () => {
      if (id) {
        try {
          const user = await fetchUser(id)
          setUser(user)
        } catch (error) {
          console.error('Error fetching user:', error)
        }
        getUserById()
      }
    }
      
  }, [id])
    
  return (
    <div>
      <NavBar />
      <SideBar />
      <Suspense fallback={<div>Loading...</div>}>
        <UserDetails user={user} />
      </Suspense>

    </div>
  )
}

export default UserDetailsPage