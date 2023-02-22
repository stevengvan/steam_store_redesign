import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Welcome to Steam</title>
      </Head>
      <div className="layout">
        <Navbar />

        <main className="main-container">{children}</main>
      </div>
    </>
  );
};

export default Layout;
