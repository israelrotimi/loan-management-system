import axios from "axios";

const API_URL = "https://run.mocky.io/v3/82a67a67-120d-4cdd-8ae2-7b9e19bc258c";


export interface User{
  id: number,
  organization: string,
  username: string,
  email: string,
  phone_no: string,
  date_joined: string,
  status: string,
  loan_amount: 10,
  savings: 1
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(API_URL)
  const data = response.data;
  return data;
}

const fetchUser = async (id: string): Promise<User> => {
  const response = await axios.get(API_URL)
  const user = response.data
  return user
}


export { fetchUsers, fetchUser }