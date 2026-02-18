
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDecorationIdeas(theme: string) {
  try {
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
    return "Error generating ideas.";
  }
}

export async function chatWithClient(history: {role: string, message: string}[]) {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are an assistant for an event planner. You are talking to a high-end client. Be professional, polite, and helpful. Use a calm and sophisticated tone.",
    },
  });

  // Sending the latest message
  const lastMessage = history[history.length - 1].message;
  const response = await chat.sendMessage({ message: lastMessage });
  return response.text;
}
