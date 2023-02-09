import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Welcome to Steam</title>
      </Head>
      <div className="layout">
        <Navbar />

        <main className="main-container">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
