import aiServices from "./gemini.js";
import buildprompt from "../utils/promptBuilder.js";


export const generateItinerary = async (req, res) => {
  const { budget, days, category } = req.body;
  try{
    const prompt = await buildprompt({ budget, days, category});
    const result = await aiServices(prompt);
    res.json({ itinerary: result });
  }
  catch(error){
    console.error('Error generating itinerary:', error);
    res.status(500).json({ error: 'Failed to generate itinerary' });
  }

}

export default  generateItinerary;