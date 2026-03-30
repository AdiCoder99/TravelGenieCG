import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const aiServices = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
  });
  console.log(response.text);
}

export default aiServices;