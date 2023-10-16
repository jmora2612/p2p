import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../auth";
import { PruebaPage } from "../../auth/pages/PruebaPage";
import { Prueba2 } from "../../auth/pages/Prueba2";


export const Publics = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<PruebaPage />} />
      <Route path="/auth/Prueba2" element={<Prueba2 />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
