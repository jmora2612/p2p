import { useDispatch, useSelector } from "react-redux";
import { activateDarkTheme } from "../store/darkTheme/darkThemeSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDarkTheme } from "../shared";

export const useDarkTheme = () => {
  const { darkTheme } = useSelector((state: IDarkTheme) => state.darkTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleDarkTheme = () => {
    dispatch(activateDarkTheme());
  };

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.style.backgroundColor = "#18181B"; // Color de fondo oscuro
    } else {
      document.documentElement.style.backgroundColor = "#F4F4F5"; // Color de fondo claro
    document.body.style.color = "black";
    }
  }, [darkTheme]);
  return {
    handleToggleDarkTheme,
    navigate,
    darkTheme,
  };
};
