import { Platform } from "react-native";
import { PostNewJobInput } from "@screens/Job/NewJob/NewJobForm";
import axios from "axios";

// const baseURL = 'https://jsonplaceholder.typicode.com';
// const baseURL = "http://10.0.2.2:3000/trpc/"; //ANDROID: 10.0.2.2 IOS: localhost
const url = Platform.OS === "ios" ? "localhost" : "10.0.2.2";
const baseURL = `http://${url}:3000/trpc/`;
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
