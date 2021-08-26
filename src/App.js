import React from "react";
import "./assets/stylesheets/App.css";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";
import { headerData } from "./data/header-data";
import { footerData } from "./data/footer-data";

function App() {
  return (
    <div className="App">
      <Header headerData={headerData} />
      <Home />
      <Footer footerData={footerData} />
    </div>
  );
}

export default App;
