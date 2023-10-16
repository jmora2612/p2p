import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../auth";

export const Publics = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
