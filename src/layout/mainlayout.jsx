import React, { createContext, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navigation from "../components/navigation";

export const UserAccountContext = createContext();

const MainLayout = () => {
  const data = useLocation();
  const [dataset, setDataset] = useState(data.state);

  useEffect(() => {
    if (dataset?.first_name && dataset?.last_name) {
      toast.success(`Hello, ${dataset.first_name} ${dataset.last_name}`);
    }
  }, [dataset]);

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
      <ToastContainer autoClose={2000} />
    </UserAccountContext.Provider>
  );
};

export default MainLayout;
