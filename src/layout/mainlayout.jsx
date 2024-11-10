import React, { createContext, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Navigation from "../components/navigation";

export const UserAccountContext = createContext();

const MainLayout = () => {
  const data = useLocation();
  const [dataset, setDataset] = useState(data.state);

  return (
    <UserAccountContext.Provider value={dataset}>
      <main className="w-screen h-screen flex overflow-hidden">
        <section className="bg-prm-clr text-scd-clr">
          <Navigation />
        </section>
        <section className="w-full h-full p-2">
          <Outlet />
        </section>
      </main>
    </UserAccountContext.Provider>
  );
};

export default MainLayout;
