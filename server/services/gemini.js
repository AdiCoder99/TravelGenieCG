import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config(); 
const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

const aiServices = async (prompt) => {
  try {
    // console.log(process.env.GEMINI_API_KEY);
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    console.log('Succeed in calling the API');
    console.log(response.text);
    
    return response.text;
  }
  catch(error){
    console.log('Failed to Call the api ');
    
    console.log(error);
    
  }
  
}

export default aiServices;