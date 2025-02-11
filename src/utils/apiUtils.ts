import axios from "axios";

const API_URL = "https://run.mocky.io/v3/7464a859-60a9-439e-b871-1eb9e9e0121c";


export interface User{
  id: number,
  organization: string,
  fullname: string,
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
  return response.data;
}



export { fetchUsers }