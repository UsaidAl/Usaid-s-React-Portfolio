import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;