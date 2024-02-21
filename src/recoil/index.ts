import { atom } from "recoil";
import { mockJobList } from "../../__mocks__/jobData";
import { mockCandidateList } from "../../__mocks__/candidateData";

export const jobListState = atom({
  key: "jobListState",
  default: mockJobList, // this is the default mock data only but can be changed to empty array []
});

export const candidateListState = atom({
  key: "candidateListState",
  default: mockCandidateList,
});
