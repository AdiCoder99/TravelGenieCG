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
    const [directions, setDirections] = React.useState(null)
    const [directionsLoading, setDirectionsLoading] = React.useState(false)
    const [directionsError, setDirectionsError] = React.useState('')

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

    const fetchDirections = async (from, to) => {
        setDirectionsLoading(true);
        setDirectionsError('');
        setDirections(null);

        try {
            const response = await fetch('http://localhost:3000/api/itinerary/directions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ from, to })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch directions');
            }

            const result = await response.json();
            console.log('===== FULL API Response:', result);
            
            // The server wraps response in { success: true, data: parsedDirections }
            let directionsData = result.data || result;
            
            // If directions is a string (JSON wrapped in markdown), parse it
            if (directionsData.directions && typeof directionsData.directions === 'string') {
                console.log('===== Found directions as string, parsing...');
                const directionString = directionsData.directions;
                
                // Remove markdown code blocks
                const cleanedPayload = directionString
                    .replace(/```json\s*/g, '')
                    .replace(/```\s*/g, '')
                    .trim();

                // Extract JSON from the string
                const jsonStart = cleanedPayload.indexOf('{');
                const jsonEnd = cleanedPayload.lastIndexOf('}');

                if (jsonStart === -1 || jsonEnd === -1) {
                    throw new Error('Could not find JSON in directions response');
                }

                const jsonString = cleanedPayload.slice(jsonStart, jsonEnd + 1);

                try {
                    directionsData = JSON.parse(jsonString);
                    console.log('===== Successfully parsed directions JSON');
                } catch (parseError) {
                    console.error('===== Failed to parse directions JSON:', parseError);
                    throw new Error('Failed to parse directions JSON');
                }
            }

            console.log('===== Extracted directionsData:', directionsData);
            console.log('===== directionsData.routes:', directionsData?.routes);

            // Validate that we have routes
            if (!directionsData || !directionsData.routes || !Array.isArray(directionsData.routes)) {
                console.error('===== VALIDATION FAILED - No routes found');
                throw new Error('Invalid response format - routes not found');
            }

            console.log('===== SUCCESS - Setting directions with', directionsData.routes.length, 'routes');
            setDirections(directionsData);
            return directionsData;
        }
        catch (error) {
            console.error('===== FETCH ERROR:', error);
            setDirectionsError(error.message || 'Something went wrong while fetching directions');
            setDirections(null);
            throw error;
        }
        finally {
            setDirectionsLoading(false);
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
        aiPlanner,
        directions,
        directionsLoading,
        directionsError,
        fetchDirections
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
