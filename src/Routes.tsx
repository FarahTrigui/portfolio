import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import HomePage from "pages/Home";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    
  ]);

  return element;
};

export default ProjectRoutes;
