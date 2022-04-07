import { types } from "../types/type";

const initialState={
    loading:false
}

export const ui= ( state= initialState, action: any) =>{
switch (action.type) {
    case types.UI_STARTLOADING :
        return{

            ...state,
            loading:true

        };
        case types.UI_FINISHLOADING :
            return{
    
                ...state,
                loading:false
            };

    default:
        return state;
}
}
