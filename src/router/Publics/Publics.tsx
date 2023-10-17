import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../auth";
import { PruebaPage } from "../../auth/pages/PruebaPage";

export const Publics = () => {
  return (
    <Routes>
      <Route path="/auth/prueba" element={<PruebaPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/auth/prueba" />} />
    </Routes>
  );
};
