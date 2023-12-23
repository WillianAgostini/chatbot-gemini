import { AIHandler } from "@/types/GeminiHandler";
import OpenAI from 'openai';

export default async function handler(body: AIHandler, callback: any) {
    try {
        const apiKey = "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"; // body.apiKey;
        const apiModel = body.model;
        const historyMessages = body.historyMessages.filter((x: any) => ["user", "model"].includes(x.role));
        const message = body.message;
        const hasImages = body.hasImages;
        const messages = [...historyMessages, message];

        const openai = new OpenAI({
            apiKey,
            dangerouslyAllowBrowser: true,
        });

        const stream = await openai.chat.completions.create({
            model: apiModel.id,
            messages: messages as Array<any>,
            stream: true,
        });
        for await (const chunk of stream) {
            callback(chunk.choices[0]?.delta?.content || '')
        }
    } catch (error: any) {
        console.error(error);
        throw new Error(`An error occurred during ping to Openai. Please refresh your browser and try again.\n ${error.message}`);
    }
};
