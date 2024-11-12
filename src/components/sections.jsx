import React from "react";
import { JobCards, OverviewCards } from "./card";

export const OverviewAllSection = () => {
  return (
    <section className="h-full w-full py-4 px-8 grid grid-cols-3 grid-rows-1 gap-4 items-center justify-center">
      <OverviewCards />
      <OverviewCards />
      <OverviewCards />
    </section>
  );
};

export const RecentJobSection = ({ jobs }) => {
  return (
    <section className="p-4 flex flex-col gap-2 w-full h-full">
      <p className="px-4 text-prm-clr font-semibold text-2xl">Recent Jobs</p>
      <div className="flex items-center justify-center h-full w-full gap-2">
        {jobs.map((item) => {
          return <JobCards data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};
