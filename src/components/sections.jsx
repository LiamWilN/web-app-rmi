import React from "react";
import { JobCards, OverviewCards } from "./card";

export const OverviewSection = () => {
  return (
    <section className="p-2 flex gap-4 justify-center">
      <OverviewCards />
      <OverviewCards />
      <OverviewCards />
    </section>
  );
};

export const JobSection = () => {
  return (
    <section className="p-4 flex flex-col gap-2 w-full h-auto">
      <JobCards />
      <JobCards />
    </section>
  );
};
