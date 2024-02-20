import axios from "axios";

const baseUrl = "http://localhost:3000/trpc/";

// Invoking get method to perform a GET request
export const fetchUser = async () => {
  const url = `${baseUrl}/job.list`;
  const response = await axios.get(url);
  console.log(response.data);
};
