import OpenAI from "openai";
import { loadPDF } from "./pdfLoader";
import { contextAddition } from "../lib/variables";

const context_pdf_file_uri = import.meta.env.VITE_S3_PDF_URI;

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true 
});

export type MessageType = {
    role: "system" | "user" | "assistant";
    content: string;
};
export async function getOpenAIResponse(message: string, callback: (chunk: string) => void): Promise<void> {
    try {
        const pdfText = await loadPDF(context_pdf_file_uri);
        const contextText = `${contextAddition} \n ${pdfText}`;
        const context = `Context from pdf: ${contextText}`;
        const messages: MessageType[] = [
            { role: "system", content: context },
            { role: "user", content: message },
        ];
        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages,
            temperature: 0,
            stream: true,
        });
        for await(const chunk of response) {
            const content = chunk.choices[0]?.delta?.content || "";
            if(content) callback(content)
        }

    } catch(e) {
        console.log("there was an error", e);
    }
}

export default getOpenAIResponse;