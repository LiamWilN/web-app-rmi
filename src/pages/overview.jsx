import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { OverviewAllSection, JobSection } from "../components/sections";

const Overview = () => {
  const { jobs } = useLoaderData();

  const activeJobs = jobs.data.data;

  const recentJobs = jobs.data.data.slice(0, 4);

  return (
    <main className="w-full h-full overflow-y-scroll">
      <div className="px-8 pt-8">
        <h1 className="text-prm-clr font-semibold text-2xl">Overview</h1>
      </div>
      <section className="h-1/3 w-full">
        <OverviewAllSection data={activeJobs} />
      </section>
      <section className="h-2/3 w-full">
        <JobSection data={recentJobs} />
      </section>
      <div className="flex items-center justify-center">
        <Link
          to="/recruitment/jobs"
          className="px-8 py-4 bg-prm-clr text-scd-clr font-semibold rounded-lg shadow-lg"
        >
          View More
        </Link>
      </div>
    </main>
  );
};

export default Overview;
