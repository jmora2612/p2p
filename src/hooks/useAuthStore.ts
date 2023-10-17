/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
// import { p2pApi } from "../api";

import { ILogin, AuthState, IRegister} from "../shared";
import { onCheking, onClearErrorMessage, onLogin, onLogout } from "../store/auth/authSlice";
import { p2pApi } from "../api";


export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state: AuthState) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }: ILogin) => {
    dispatch(onCheking());
    try {
      const { data: result } = await p2pApi.post("/login", {
        email,
        password,
      });
      const { data } = result;
      const setUser = { _id: data._id, name: data.name }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(setUser));
      delete data.token;
      dispatch(onLogin(data));
      //
    } catch ({ response }: any) {
      
      dispatch(onLogout(response.data.message));
      setTimeout(() => {
        dispatch(onClearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }: IRegister) => {
    dispatch(onCheking());
    try {
      const { data: result } = await p2pApi.post("/usuario", {
        name,
        email,
        password,
      });
      const { data } = result;
      const setUser = { _id: data._id, name: data.name }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(setUser));
      delete data.token;
      dispatch(onLogin(data));
    } catch ({ response }: any) {
      dispatch(onLogout(response.data.message));
      setTimeout(() => {
        dispatch(onClearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) dispatch(onLogout());
    try {
      const { data: result } = await p2pApi.get("/token-refresh");
      const { data } = result;
      const setUser = { _id: data._id, name: data.name }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(setUser));
      dispatch(onLogin({ _id: data._id, name: data.name }));
    } catch ({ response }: any) {      
      // localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //propiedades
    status,
    user,
    errorMessage,

    //metodos
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
