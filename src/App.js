import React from "react";
import NavBar from "./NavBar";
import Head from "./Head"
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About"
import Footer from "./Footer"
import Copyright from "./Copyright";

function App() {
  return (
    <div>
      <NavBar/>
      <Head/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App;
 