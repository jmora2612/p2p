import { useEffect } from "react";
import { useAuthStore } from "../hooks";
import { Publics } from "./Publics/Publics";
import { Privates } from "./Privates/Privates";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return <>{status === "not-authenticated" ? <Publics /> : <Privates />}</>;
};
