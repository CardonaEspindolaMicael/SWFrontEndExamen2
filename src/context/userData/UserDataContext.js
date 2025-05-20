
import React, { createContext, useReducer } from 'react'
import { userDataReducer } from './userDataReducer';




export const UserDataContext= createContext();

const initialState = {
   ci: '',// del usuario actual
   usuarios: [],// de la sala actual
   room: '',// de la sala actual
   invitacion: '',// de la sala actual
   

}



export const UserDataProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(userDataReducer, initialState);

  return (
    <UserDataContext.Provider 
     value={{
      state,
      dispatch  

     }}>
      {children}
    </UserDataContext.Provider>
  )
}