import { Conversation } from "./Conversation";
import { AIModel } from "./Model";

export type AIHandler = {
    apiKey: string;
    model: AIModel;
    historyMessages: Conversation[];
    message: Conversation;
    hasImages?: boolean;
}
