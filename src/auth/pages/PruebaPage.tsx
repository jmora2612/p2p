import { useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "../../shared";
import { useDispatch, useSelector } from "react-redux";
import { activateDarkTheme } from "../../store/darkTheme/darkThemeSlice";
import { useNavigate } from "react-router-dom";

export const PruebaPage = () => {
  const { darkTheme } = useSelector((state: any) => state.darkTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToggleDarkTheme = () => {
    dispatch(activateDarkTheme()); // Llama a la acción para cambiar el modo oscuro
  };

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <>
          <div style={{ marginBottom: "20px" }}>
            <Switch
              // onClick={darkMode.toggle}
              onClick={handleToggleDarkTheme}
              defaultSelected
              size="lg"
              color="secondary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <SunIcon className={className} />
                ) : (
                  <MoonIcon className={className} />
                )
              }
            >
              {darkTheme ? "Modo Claro" : "Modo Oscuro"}
            </Switch>
          </div>
          <button onClick={() => navigate("/auth/Prueba2")}>Ir a Prueba2</button>  
    </>
  );
};
