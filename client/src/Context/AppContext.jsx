import React, { useContext } from 'react'
import { createContext } from 'react'


const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [duration, setDuration] = React.useState('')
    const [budget, setBudget] = React.useState('')
    const [category, setCategory] = React.useState('')

    const aiPlanner = async (data) => {
    try{
        
    }
    catch(error){

    }
    
    }

    const value = {
        duration,
        setDuration,
        budget,
        setBudget,
        category,
        setCategory
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
