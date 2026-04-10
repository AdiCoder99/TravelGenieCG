import createPlan from "../services/plannerServices.js";
import aiServices from "../services/gemini.js";
import { buildDirectionPrompt } from "../utils/promptBuilder.js";

export const generateItinerary = async (req, res) => {
  const { budget, days, category } = req.body;
  try{
    const result = await createPlan({budget, days, category })
    res.json({ itinerary: result });
  }
  catch(error){
    console.error('Error generating itinerary:', error);
    res.status(500).json({ error: 'Failed to generate itinerary' });
  }

}

export const getDirections = async (req, res) => {
  const { from, to } = req.body;
  
  // Validate inputs
  if (!from || !to) {
    return res.status(400).json({ 
      error: 'Both "from" and "to" locations are required' 
    });
  }

  try {
    // Build the prompt for direction instructions
    const prompt = buildDirectionPrompt({ from, to });
    
    // Call Gemini API
    const directions = await aiServices(prompt);
    
    // Parse the response if it's JSON, otherwise return as is
    let parsedDirections;
    try {
      parsedDirections = JSON.parse(directions);
    } catch {
      parsedDirections = { directions: directions };
    }
    
    res.json({ 
      success: true,
      data: parsedDirections 
    });
  } catch (error) {
    console.error('Error fetching directions:', error);
    res.status(500).json({ 
      error: 'Failed to fetch directions',
      details: error.message 
    });
  }
}

export default generateItinerary;