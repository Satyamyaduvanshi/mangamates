import React from "react";
import { Header, Footer } from "./components/Index"; "./components/Index.js"

function Layout({ children }) {

  return (
    <>
      <Header />
      <children />
      <Footer />
    </>
  )
}

export default Layout;
