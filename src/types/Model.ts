export type OpenAIModel = {
  name: string;
  id: string;
  available: boolean;
};

export interface ChatMessage {
  parts: string;
  role: string;
}
