import { useContext, useState } from "react";
import React from "react";
import getGame from "./services/getGame";

const AppContext = React.createContext();
const AppProvider = ({children}) =>{
    const [query, setQuery] = useState('')
    const {isLoading, error, data: games} = getGame(`&platforms=4&search=${query}&search_precise=true&ordering=-rating&page_size=10`)
    
    return(
        <AppContext.Provider value={{isLoading, error, games , query, setQuery}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}