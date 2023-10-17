import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface ModoOscuroState {
    darkTheme: boolean;
  }
  
  const initialState: ModoOscuroState = {
    darkTheme: false,
  };

  export const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
      // Acción para activar/desactivar el modo oscuro
      activateDarkTheme: (state) => {
        state.darkTheme = !state.darkTheme;
      },
    },
  });
  
  // Exporta la acción para ser utilizada en los componentes
  export const { activateDarkTheme } = darkThemeSlice.actions;
  
  // Exporta el reducer para ser utilizado en el store
  export default darkThemeSlice.reducer;
  
  // Define el tipo de la acción para asegurar el tipo correcto de payload
  export type DarkThemeAction = PayloadAction<boolean>;