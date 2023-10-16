import { createSlice } from '@reduxjs/toolkit';

interface ModoOscuroState {
    darkTheme: boolean;
  }
  
  const initialState: ModoOscuroState = {
    darkTheme: true, // Puedes establecer el valor inicial según tus necesidades
  };

export const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
      activateDarkTheme: (state) => {
        state.darkTheme = !state.darkTheme
      },
    },
  });

  export const { activateDarkTheme } =
  darkThemeSlice.actions;