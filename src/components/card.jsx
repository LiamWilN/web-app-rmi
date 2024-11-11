import React from "react";

export const OverviewCards = ({ value }) => {
  return (
    <section className="w-full h-full rounded-lg shadow-xl flex flex-col items-center justify-center bg-scd-clr self-center">
      <p>Active</p>
      <h1 className="text-prm-clr text-4xl font-bold">{value}</h1>
      <h5></h5>
    </section>
  );
};

export const JobCards = () => {
  return (
    <section className="w-full h-full shadow-xl rounded-lg bg-scd-clr">
      <h1 className="text-prm-clr text-xl"></h1>
    </section>
  );
};
