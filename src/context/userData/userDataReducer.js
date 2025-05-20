import { types } from "../../type/types";

export const userDataReducer = (state, action) => {
    switch (action.type) {
        case types.usuariosEnSalaCargados:
            return {
                ...state,
                usuarios: {...action.payload}
            }
        case types.numeroSala:
            return {
                ...state,
                room: action.payload
            }
        case types.invitacion:
            return {
                ...state,
                invitacion: action.payload
            }

        default:
            return state;
    }
}