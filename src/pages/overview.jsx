import React from "react";
import { useLoaderData } from "react-router-dom";
import { OverviewSection, JobSection } from "../components/sections";

const Overview = () => {
  const { jobs } = useLoaderData();
  console.log(jobs.data.data);

  return (
    <main className="w-full h-full overflow-y-scroll">
      <section className="h-24 p-2">
        <h1 className="text-prm-clr font-semibold text-2xl">Overview</h1>
      </section>
      <div className="grid grid-cols-1 grid-rows-2 bg-blue-400 w-full h-full">
        <OverviewSection />
        <JobSection />
      </div>
    </main>
  );
};

export default Overview;
