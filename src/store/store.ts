import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { darkThemeSlice } from "./darkTheme/darkThemeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    darkTheme: darkThemeSlice.reducer,

  },
  //middleware
  //esto es para que las fechas no se revise si se pueden serializar
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
