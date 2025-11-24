import { GoogleGenAI } from "@google/genai";
import { RESUME } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Ananya S M in her professional portfolio.
Your goal is to answer questions about Ananya's professional background, skills, and experience in a friendly, professional, and concise manner.

Here is Ananya's Profile Data:
Name: ${RESUME.name}
Role: ${RESUME.title}
Summary: ${RESUME.summary}
Skills: ${JSON.stringify(RESUME.skills)}
Experience: ${JSON.stringify(RESUME.experience)}
Education: ${JSON.stringify(RESUME.education)}
Awards: ${JSON.stringify(RESUME.awards)}
Publications: ${JSON.stringify(RESUME.publications)}
LinkedIn: ${RESUME.social.linkedin}

Guidelines:
1. Speak in the first person occasionally (e.g., "I worked at Ola...") or third person ("Ananya worked at Ola...") but be consistent within a response. First person is more personable for a portfolio bot.
2. Keep answers short (under 100 words) unless specifically asked for details.
3. Highlight her expertise in Prompt Engineering, Python, and Data Science.
4. If asked about contact info, provide the LinkedIn link.
5. If asked something unrelated to her professional life, politely steer the conversation back to her skills or experience.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, content: string}[]) => {
  try {
    // We construct a chat session-like interaction using generateContent for simplicity and control
    // combining the system instruction + history + new message.
    
    // Convert simplified history to format suitable for context string
    const conversationContext = history.map(h => `${h.role === 'user' ? 'User' : 'Ananya (AI)'}: ${h.content}`).join('\n');
    
    const prompt = `
    ${conversationContext}
    User: ${message}
    Ananya (AI):
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to my thought process. Please try again later!";
  }
};