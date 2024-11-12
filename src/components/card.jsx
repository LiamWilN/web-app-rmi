import React, { useState } from "react";
import { HandCoins } from "lucide-react";

export const OverviewCards = ({ value }) => {
  return (
    <section className="w-full h-full rounded-lg shadow-xl flex flex-col items-center justify-center bg-scd-clr self-center">
      <p>Active</p>
      <h1 className="text-prm-clr text-4xl font-bold">{value}</h1>
      <h5></h5>
    </section>
  );
};

export const JobCards = ({ data }) => {
  const [summary, setSummary] = useState(false);

  const toggleSummary = () => {
    setSummary((prev) => !prev);
  };

  const jobsummary = summary
    ? data.job_summary
    : `${data.job_summary.substring(0, 90) + "..."}`;

  console.log(data);
  return (
    <section className="w-full h-full shadow-xl rounded-lg bg-scd-clr p-4">
      <div className="pb-2 border-b-2 flex justify-between w-full">
        <h1 className="text-prm-clr text-xl font-semibold ">
          {data.job_title}
        </h1>
        <button
          disabled="disabled"
          className="bg-prm-clr text-scd-clr px-2 py-1 rounded-lg shadow-sm text-xs"
        >
          {data.status.toUpperCase()}
        </button>
      </div>
      <p className="p-2 text-sm text-acn-clr min-h-5">{jobsummary}</p>
      <button className="text-sm text-prm-clr" onClick={toggleSummary}>
        {summary ? "See Less" : "See More"}
      </button>
      <div className="flex flex-col">
        <section className="flex gap-2 p-2">
          <HandCoins className="text-prm-clr" />
          <p>
            {data.min_salary} - {data.max_salary}
          </p>
        </section>
      </div>
    </section>
  );
};
