import { MoonIcon, SunIcon } from "../../shared";
import React from "react";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import { CardBody, Card, Switch } from "@nextui-org/react";

export const PruebaPage = () => {
  const { handleToggleDarkTheme, navigate, darkTheme } = useDarkTheme();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          height: "100vh",
        }}
      >
        <Card
          style={{
            width: "50%",
            marginBottom: "20px",
            backgroundColor: darkTheme ? "#27272A" : "#FFFFFF",
          }}
          className={`${darkTheme ? "dark:bg-dark-primary" : "bg-primary"}`}
        >
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
        <Card
          style={{
            padding: "25px 40px",
            width: "50%",
            height: "80%",
            backgroundColor: darkTheme ? "#27272A" : "#FFFFFF",
          }}
          className={`${darkTheme ? "dark:bg-dark-primary" : "bg-primary"} `}
        >
          <Card
            style={{
              border: "2px solid #DAA520",
              width: "100%",
              height: "15%",
              padding: "1px",
              backgroundColor: darkTheme ? "#27272A" : "#FFFFFF",
              overflow: "hidden",
            }}
          >
            <CardBody>
              <h3>PRUEBA</h3>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
          </Card>
          <br />
          <CardBody style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
              <div style={{ marginBottom: "20px" }}>
                <Switch
                  onClick={handleToggleDarkTheme}
                  defaultSelected
                  size="lg"
                  color="secondary"
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                      <SunIcon
                        className={darkTheme ? `dark:${className}` : className}
                      />
                    ) : (
                      <MoonIcon
                        className={darkTheme ? `dark:${className}` : className}
                      />
                    )
                  }
                >
                  {darkTheme ? "Modo Claro" : "Modo Oscuro"}
                </Switch>
              </div>
            </div>
            <div>
              <h1>Pruebaaaaaaaa</h1>
              <button onClick={() => navigate("/auth/login")}>
                Ir a login
              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

{
  /*
   */
}
