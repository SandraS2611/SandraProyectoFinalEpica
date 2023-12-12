import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { RegisterForm } from "./components/RegisterForm";
import { NotFoundPage } from "./pages/404Page";
import { Perfil } from "./Pages/Perfil";
import { HomePage } from "./Pages/HomePage";




export const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
