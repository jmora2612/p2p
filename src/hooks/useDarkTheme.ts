import { useDispatch, useSelector } from "react-redux";
import { activateDarkTheme } from "../store/darkTheme/darkThemeSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDarkTheme } from "../shared";

const applyDarkThemeStyles = (isDarkTheme: boolean) => {
  if (isDarkTheme) {
    document.documentElement.style.backgroundColor = "#18181B"; // Color de fondo oscuro
  } else {
    document.documentElement.style.backgroundColor = "#F4F4F5"; // Color de fondo claro
  }
};

export const useDarkTheme = () => {
  const { darkTheme } = useSelector((state: IDarkTheme) => state.darkTheme);
   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDarkThemeLoaded, setIsDarkThemeLoaded] = useState(false);

  const handleToggleDarkTheme = () => {
    dispatch(activateDarkTheme());
  };

  useEffect(() => {
    applyDarkThemeStyles(darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    // Una vez que el tema oscuro se carga desde localStorage, setea isDarkThemeLoaded a true
    setIsDarkThemeLoaded(true);
  }, []);

  return {
    handleToggleDarkTheme,
    navigate,
    darkTheme,
    isDarkThemeLoaded
  };
};