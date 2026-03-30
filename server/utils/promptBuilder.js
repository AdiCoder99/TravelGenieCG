
const buildprompt =  ({ budget, days, category }) => {
  return `
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

export default buildprompt;