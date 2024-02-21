import { PostNewJobInput } from "@screens/Job/NewJob/NewJobForm";
import axios from "axios";

const baseURL = "http://localhost:3000/trpc/";
// const baseURL = 'https://jsonplaceholder.typicode.com';
const api = axios.create({
  baseURL,
});

export const fetchJobs = async () => {
  try {
    const response = await api.get("/job.list");
    const list = response.data.result.data.data; // if you want access other properties change data
    return list;
  } catch (error) {
    console.error("Error fetching Jobs:", error);
    throw error;
  }
};

export const fetchCandidates = async () => {
  try {
    const response = await api.get("/candidate.list");
    const list = response.data.result.data.data; // if you want access other properties change data
    return list;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    throw error;
  }
};

export const postNewJob = async (newJob: PostNewJobInput) => {
  try {
    const response = await api.post("/job.addJobPost", newJob);
    const data = response.data.result.data;
    return data;
  } catch (error) {
    console.error("Error posting new job:", error);
    throw error;
  }
};

export const login = async (user: any) => {
  try {
    console.log("user", user);
    const response = await api.post("/login", user);
    const data = response.data.result.data;
    console.log("axios post", response.data);
    return data;
  } catch (error) {
    console.error("Error adding new user:", error);
    throw error;
  }
};
