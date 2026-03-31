import createPlan from "../services/plannerServices.js";


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

export default  generateItinerary;