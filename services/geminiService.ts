
import { GoogleGenAI } from "@google/genai";

// Lazy initialization to prevent top-level ReferenceErrors in static environments
function getAIInstance() {
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    console.error("Gemini API Key is missing. Ensure process.env.API_KEY is configured.");
  }
  return new GoogleGenAI({ apiKey });
}

export async function getDecorationIdeas(theme: string) {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 5 creative decoration ideas for an event with the theme: "${theme}". Return as a list of bullet points.`,
      config: {
        systemInstruction: "You are a world-class luxury event designer. Provide sophisticated and elegant decoration suggestions in the context of Paris high-end events.",
      }
    });
    return response.text || "No ideas generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our design studio is currently offline. Please try again in a moment.";
  }
}

export async function chatWithClient(history: {role: string, message: string}[]) {
  try {
    const ai = getAIInstance();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are an assistant for an event planner. You are talking to a high-end client. Be professional, polite, and helpful. Use a calm and sophisticated tone.",
      },
    });

    const lastMessage = history[history.length - 1].message;
    const response = await chat.sendMessage({ message: lastMessage });
    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm sorry, I'm having trouble connecting to the concierge service right now.";
  }
}