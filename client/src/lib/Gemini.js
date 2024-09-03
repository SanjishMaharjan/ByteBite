import { GoogleGenerativeAI } from "@google/generative-ai";

// Use Vite's import.meta.env to access environment variables
const API_KEY = import.meta.env.VITE_GEMINI_PUBLIC_KEY;
console.log(API_KEY);

// Check if API key is available
if (!API_KEY) {
  throw new Error("VITE_GEMINI_PUBLIC_KEY is not set in the environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;

