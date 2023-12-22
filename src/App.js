import React from "react";
import frog from "./images/frog.png";

import BoardContent from "./Components/BoardContent/BoardContent";
import Navbar from "./Components/Navbar/Navbar";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { successToast, errorToast } from "./notifications/notifications";

export const getProjects = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/boards"
    );
    return response.data;
  } catch (error) {
    errorToast(`Error fetching projects: ${error}`);
    throw error;
  }
};

export const useProjects = () => {
  return useQuery("projects", getProjects);
};

function App() {
  const { data: projects, isLoading } = useProjects();
  console.log(projects);
  if (isLoading) return <h5>Loading...</h5>;

  return (
    <div className="trello-container">
      <Navbar />
      <BoardContent />
    </div>
  );
}

export default App;
