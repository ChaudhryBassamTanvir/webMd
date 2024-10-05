import React from "react";
import Navbar from "../components/Navbar";
import LoginPage from "../components/LoginComponent/login";
import Footer from "../components/Footer";

export default function login() {
  return (
    <div className="bg-bodyColor">
      <Navbar />
      <LoginPage />
      <Footer />
    </div>
  );
}
