import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  //middleware
  //esto es para que las fechas no se revise si se pueden serializar
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
