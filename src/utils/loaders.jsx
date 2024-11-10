import axios from "./axiosconfig";

export async function JobsListings() {
  const jobs = await axios.get("/jobs");
  return { jobs };
}

export async function ApplicantsListing() {
  const applicants = await axios.get("/users/get_applicants");
  return { applicants };
}

export async function OverviewListing() {
  const jobs = await axios.get("/jobs");
  // const applicants = await axios.get("/users/get_applicants");
  return { jobs };
}
