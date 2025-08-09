import React, { use } from "react";
import { Outlet } from "react-router";
import Footer from "../Components/NavberAndFooter/Footer";
import Navber from "../Components/NavberAndFooter/Navber";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";
export const url = "https://glowing-artifact.vercel.app";
// export const url = " http://localhost:5000";

function Home() {
  const { loading } = use(AuthContext);

  return (
    <div>
      {loading ? (
        <div>
          <Loading />{" "}
        </div>
      ) : (
        <div>
          {" "}
          <Navber />
          <Outlet />
          <ToastContainer />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
