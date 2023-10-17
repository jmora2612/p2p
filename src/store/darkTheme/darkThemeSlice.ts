import { createSlice } from '@reduxjs/toolkit';

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
      activateDarkTheme: (state) => {
        state.darkTheme = !state.darkTheme
      },
    },
  });

  export const { activateDarkTheme } =
  darkThemeSlice.actions;