import { types } from "../types/type";

export const loginStart = (email: string, password: string) => {
  return async(dispatch: any) => {
  };
};

export const loginDone = (user: any) => ({ 
  type: types.AUTH_LOGINDONE,
  payload: user,
});

export const startChecking = () => {
  return async(dispatch: any) => {
     dispatch(checkingFinish());
     throw new Error('Error in token validation');
    }
  };

export const checkingFinish = () => ({ type: types.AUTH_CHEKINGEND });
export const logout = () => ({ type: types.AUTH_LOGOUT });
