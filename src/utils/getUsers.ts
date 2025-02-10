import axios from "axios";

const API_URL = "https://run.mocky.io/v3/1aa51e08-3345-4bef-80a3-6e67fc09a30b";


interface User{
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
  console.log(response.data)

  return data;
}


export { fetchUsers }