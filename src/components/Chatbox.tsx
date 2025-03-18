import { useState, useRef, useEffect, useCallback } from "react";
import SendIcon from '@mui/icons-material/Send';
import loadingGif from "../assets/loading.gif";

interface Message {
    role: string,
    content: string
}

type Messages = Message[];

interface Props {
    messages: Messages,
    loading: boolean,
    submitMessage: (textMessage: string) => void
}

export default function Chatbox({ messages, loading, submitMessage }:Props) {
    const [textMessage, setTextMessage] = useState<string>("");
    const scrollableDivRef = useRef<HTMLDivElement>(null);

    const sendMessage = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            submitMessage(textMessage);
            setTextMessage("");
        }
    }, [textMessage, submitMessage])
    

    useEffect(() => {
        if(scrollableDivRef.current) {
            scrollableDivRef.current.scrollTop = scrollableDivRef?.current?.scrollHeight;
        }
    }, [messages, submitMessage]);

    return (
        <div className="mt-3 mb-2 w-full h-full flex flex-col justify-between">
            <div ref={scrollableDivRef} className="text-stream mb-2 h-100 flex justify-start overflow-auto flex-[1_0_auto]">
                <ul className="w-full">
                    {messages?.map((message, index) => (
                        <li key={message.content + index} className={`${message.role === "user" ? "bg-[#8ab1a5] mr-[0] ml-[auto] text-white" : "bg-[#ffffff]"} relative my-3 py-1 px-4 max-w-max lg:w-[60%] rounded-xl break-words shadow-md`}>
                        {message.content}
                    </li>
                    ))}
                    {loading && <li><img src={loadingGif} className="loading-gif" alt="loading..." /></li>}
                </ul>
            </div>
            <div className="relative flex-[0_0_auto] flex flex-col">
                <input type="text" value={textMessage} onKeyDown={sendMessage} onChange={e => setTextMessage(e.target.value)} placeholder="ask Loona!" className="relative block p-2 rounded-[3rem] border-2 bg-white border-[#cecece]" />
                <SendIcon className="absolute right-3 top-3 cursor-pointer" sx={{ color: "#90b7ab", fontSize: "1rem"}} />
            </div>
        </div>
    )
}