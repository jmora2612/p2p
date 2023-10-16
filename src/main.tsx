import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {NextUIProvider} from '@nextui-org/react'

import "./styles.css";
import { P2p } from "./P2p";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NextUIProvider>
          <P2p />
        </NextUIProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
