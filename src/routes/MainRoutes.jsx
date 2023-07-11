import React from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AddContactPage from "../pages/AddContactPage";
import EditContactPage from "../pages/EditContactPage";
import { Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddContactPage />} />
          <Route path="/edit/:id" element={<EditContactPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
