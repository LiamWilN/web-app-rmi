import React from "react";
import { useLoaderData } from "react-router-dom";

const Jobs = () => {
  const { jobs } = useLoaderData();
  console.log(jobs);
  return <main className="w-full h-full overflow-y-scroll"></main>;
};

export default Jobs;
