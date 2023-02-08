import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Welcome to Steam</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main className="main-container">{children}</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
