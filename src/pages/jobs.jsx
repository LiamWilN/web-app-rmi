import React from "react";
import { useLoaderData } from "react-router-dom";
import { JobSection } from "../components/sections";

const Jobs = () => {
  const { jobs } = useLoaderData();
  const allJobs = jobs.data.data;
  return (
    <main className="w-full h-full overflow-y-scroll">
      <JobSection data={allJobs} />
    </main>
  );
};

export default Jobs;
