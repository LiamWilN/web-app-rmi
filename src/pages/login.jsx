import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import RMILogo from "../assets/images/rmi-login-icon.png";
import { Form, replace, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "../utils/axiosconfig";

const Login = () => {
  const userNameRef = useRef();
  const passWordRef = useRef();
  const navigateTo = useNavigate();

  function authlogin() {
    const loginData = JSON.stringify({
      userName: userNameRef.current.value,
      password: passWordRef.current.value,
    });

    const fetchData = async () => {
      toast.dismiss();
      toast.info("Verifying Account");
      try {
        const response = await axios.post("/login", loginData);
        if (response.status === 200 && response.statusText === "OK") {
          toast.dismiss();
          toast.success("Login successful!");
          console.log(response);
          setTimeout(() => {
            navigateTo("/recruitment", {
              replace: true,
              state: response.data.data,
            });
          }, 1000);
        }
      } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.message || "Login failed";
        toast.dismiss();
        toast.error(errorMessage);
      }
    };

    fetchData();
  }

  return (
    <div className="w-screen h-screen bg-prm-clr text-scd-clr flex items-center justify-center">
      <main className="bg-scd-clr w-96 h-96 rounded-md shadow-md flex flex-col items-center justify-between">
        <section className="w-full flex flex-col items-center mt-4">
          <img src={RMILogo} className="w-40 h-32" alt="Readyman, Inc." />
        </section>
        <section className="px-8 py-2 text-black">
          <Form onSubmit={authlogin}>
            <label htmlFor="username" className="text-sm text-acn-clr">
              Username:{" "}
            </label>
            <input
              type="text"
              className="p-2 bg-acn-clr/50 rounded-md w-full"
              name="username"
              ref={userNameRef}
            />
            <label htmlFor="password" className="text-sm text-acn-clr">
              Password:{" "}
            </label>
            <input
              type="password"
              className="p-2 bg-acn-clr/50 rounded-md w-full"
              name="password"
              ref={passWordRef}
            />
            <button className="bg-prm-clr text-scd-clr w-full mt-4 p-2 rounded-md shadow-md">
              Login
            </button>
          </Form>
        </section>
        <section>
          <p className="text-prm-clr text-sm pb-2">
            Powered by RYS Property Holdings, Inc., IT Department
          </p>
        </section>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Login;
