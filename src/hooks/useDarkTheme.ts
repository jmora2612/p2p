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
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  return {
    handleToggleDarkTheme,
    navigate,
    darkTheme,
  };
};
