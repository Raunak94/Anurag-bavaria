import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/homscreen/Home";
import WhoWeAre from "./components/who_we_are/WhoWwAre";
import WhatWeDo from "./components/what_we_do/WhatWeDo";
import Insights from "./components/insights/Insights";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden antialiased">
        <div className="fixed inset-0 -z-10">
          {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <div className="text-4xl font-bold">
            <Navbar />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
