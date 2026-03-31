import buildprompt from "../utils/promptBuilder.js";
import aiServices from "./gemini.js ";

export const createPlan = async ({budget, days, category}) => {
  if(!budget || !days || !category){
    throw Error('Missing required parameters');
  }
  const prompt = buildprompt({budget, days, category});
  const result = await aiServices(prompt);
  return result;
}

export default createPlan;