export interface AuthState {
  auth: {
      status: string;
      user: string; 
      errorMessage: string | null;
  };
}

export interface IDarkTheme {
  darkTheme:{
    darkTheme:boolean
  },
}

