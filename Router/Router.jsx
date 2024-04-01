import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../src/Layouts/MainLayout";
import Content from "../src/components/Content";


const Router = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Content />} />
      </Route>
    </Routes>
  );
};

export default Router;
