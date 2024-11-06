/* eslint-disable react/no-unescaped-entities */

import "./App.css";
import './index.css';
// ... rest of your code

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Aside/>
      <div className="main-content motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate">
       <Navbar/>
        <section style={{
          scrollBehavior: "smooth"
        }}><Outlet/></section>
      </div>
    </>
  );
}

export default App;
