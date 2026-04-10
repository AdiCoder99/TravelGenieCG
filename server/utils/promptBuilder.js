
const buildprompt =  ({ budget, days, category }) => {
  return `
  You are a travel planner expert.
Create a ${days}-day travel itinerary for Chhattisgarh.

Budget: ${budget}
Interest: ${category}

Return JSON format:
{
  "days": [
    { "day": 1, "places": [], "cost": "" }
  ]
}
`;
};

const buildDirectionPrompt = ({ from, to }) => {
  return `
You are a travel navigation expert. Provide clear directions and how to reach from one location to another.

From: ${from}
To: ${to}

Provide:
1. The best routes/modes of transportation
2. Step-by-step directions
3. Estimated travel time
4. Distance
5. Alternative routes if available
6. Any important tips or warnings

Format the response as JSON:
{
  "from": "${from}",
  "to": "${to}",
  "routes": [
    {
      "mode": "transportation mode",
      "duration": "estimated time",
      "distance": "distance",
      "steps": ["step 1", "step 2", "step 3"],
      "tips": ["tip 1", "tip 2"]
    }
  ],
  "alternatives": ["alternative route 1", "alternative route 2"]
}
`;
};

export { buildprompt as default, buildDirectionPrompt };