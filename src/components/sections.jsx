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

export const RecentJobSection = () => {
  return (
    <section className="p-4 flex flex-col gap-2 w-full h-full">
      <p className="px-4 text-prm-clr font-semibold text-2xl">Recent Jobs</p>
      <div className="grid grid-cols-2 grid-rows-1 h-full w-full gap-2">
        <JobCards />
        <JobCards />
      </div>
    </section>
  );
};
