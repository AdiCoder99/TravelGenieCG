import React, { useContext } from 'react'
import { createContext } from 'react'


const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [duration, setDuration] = React.useState('')
    const [budget, setBudget] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [itinerary, setItinerary] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const parseItinerary = (payload) => {
        if (payload && typeof payload === 'object' && payload.days) {
            return payload;
        }

        if (typeof payload !== 'string') {
            return null;
        }

        const cleanedPayload = payload
            .replace(/```json\s*/g, '')
            .replace(/```\s*/g, '')
            .trim();

        const jsonStart = cleanedPayload.indexOf('{');
        const jsonEnd = cleanedPayload.lastIndexOf('}');

        if (jsonStart === -1 || jsonEnd === -1) {
            return null;
        }

        const jsonString = cleanedPayload.slice(jsonStart, jsonEnd + 1);

        try {
            return JSON.parse(jsonString);
        }
        catch (parseError) {
            console.error('Failed to parse itinerary response:', parseError);
            return null;
        }
    };

    const aiPlanner = async (data) => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3000/api/itinerary/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to generate itinerary');
            }

            const result = await response.json();
            const parsedItinerary = parseItinerary(result.itinerary);

            if (!parsedItinerary || !Array.isArray(parsedItinerary.days)) {
                throw new Error('Invalid itinerary response');
            }

            setItinerary(parsedItinerary);
            return parsedItinerary;
        }
        catch (error) {
            setError(error.message || 'Something went wrong while generating itinerary');
            setItinerary(null);
            throw error;
        }
        finally {
            setLoading(false);
        }
    }

    const value = {
        duration,
        setDuration,
        budget,
        setBudget,
        category,
        setCategory,
        itinerary,
        loading,
        error,
        aiPlanner
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
