import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from "./auth/authSlice";
import { darkThemeSlice } from "./darkTheme/darkThemeSlice";

// Combina los reducers en un único reducer raíz
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  darkTheme: darkThemeSlice.reducer,
});

// Configuración de persistencia para el slice darkTheme
const persistConfig = {
  key: 'root', // La clave para el almacenamiento en localStorage
  storage, // Almacenamiento en localStorage
  whitelist: ['darkTheme'] // Lista blanca de los slices que quieres persistir (solo darkTheme en este caso)
};

// Crea un reducer persistido con la configuración de persistencia y el rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura el store con el reducer persistido y el middleware para evitar la serialización
export const store = configureStore({
  reducer: persistedReducer, // Usa persistedReducer en lugar de rootReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Crea el persistor para usar en el componente raíz de tu aplicación
export const persistor = persistStore(store);