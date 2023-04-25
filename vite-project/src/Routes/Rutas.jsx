import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Menu } from "../shared/Menu/Menu";
import { Footer } from "../shared/Footer/Footer";

export const Rutas = () => {
  return (
    <Fragment>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div style={{ width: '100%', height: '300px', backgroundColor: '#090D0E'}}>
      <Footer/>
      </div>
    </Fragment>
  );
};
