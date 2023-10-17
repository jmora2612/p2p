import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { darkThemeSlice } from './darkTheme/darkThemeSlice';


const rootReducer = combineReducers({
    auth: authSlice.reducer,
    darkTheme: darkThemeSlice.reducer,
});

export default rootReducer;