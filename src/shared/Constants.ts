import { AIModel } from "@/types/Model";

export const LS_UUID = "@ls/uuid";

export const GEMINI_PRO_MODEL = {
  name: "Gemini Pro",
  id: "gemini-pro",
  available: true,
};

export const GEMINI_PRO_VISION_MODEL = {
  name: "Gemini Pro Vision",
  id: "gemini-pro-vision",
  available: true,
};

export const DEFAULT_OPENAI_MODEL = {
  name: "Default (GPT-3.5)",
  id: "gpt-3.5-turbo",
  available: true,
};

export const GPT4_OPENAI_MODEL = {
  name: "GPT-4",
  id: "gpt-4",
  available: true,
};

export function isGemini(id: string): boolean {
  return id === GEMINI_PRO_MODEL.id || id === GEMINI_PRO_VISION_MODEL.id;
}

export function isGPT(id: string): boolean {
  return id === DEFAULT_OPENAI_MODEL.id || id === GPT4_OPENAI_MODEL.id;
}

export const GEMINI_MODELS: AIModel[] = [
  GEMINI_PRO_MODEL,
  GEMINI_PRO_VISION_MODEL,
  DEFAULT_OPENAI_MODEL,
  GPT4_OPENAI_MODEL,
];
