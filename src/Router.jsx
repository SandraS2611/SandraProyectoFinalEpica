import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { TasksPage } from "./pages/TasksPage";
import { TaskByIdPage } from "./pages/TaskByIdPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/perfil" element={<ProfilePage />} />
      <Route path="/tareas" element={<TasksPage />} />
      <Route path="/tareas/:taskId" element={<TaskByIdPage />} />
    </Routes>
  );
};
