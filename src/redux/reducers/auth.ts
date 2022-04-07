import { types } from "../types/type";


const initialState = {
  auth: false,
  checking: true,
  role: "GUEST_ROLE",
};

export const auth = (state = initialState, action: any) => {
  switch (action.type) {

   case types.AUTH_LOGINDONE:
      return {
        ...state,
        ...action.payload,
        auth: true,
        checking: false,
      };
    case types.AUTH_CHEKINGEND:
      return {
        ...state,
        checking: false,
      };

    case types.AUTH_LOGOUT:
      return {
        auth: false,
        role: "GUEST_ROLE",
      };
    default:
      return state;
  }
};
