import { AppRouter } from "./router/AppRouter";
import { useSelector } from "react-redux";

export const P2p = () => {
  const { darkTheme } = useSelector((state: any) => state.darkTheme);

  return (
    <>
      <main className={darkTheme ? "dark" : ""}>
      <div style={{ position: "fixed", top: "20px", right: "20px" }}>
        <AppRouter />
        </div>
      </main>
    </>
  );
};
