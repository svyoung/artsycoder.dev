import { useState, useRef, useEffect, useCallback } from "react";
import ChatBubble from "./ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import loadingGif from "../../assets/loading.gif";

export interface Message {
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
        if(event.key === "Enter" && textMessage !== "") {
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
        <div className="chatbox-main mt-3 mb-2 w-full">
            <div ref={scrollableDivRef} className="text-stream mb-2 h-100 overflow-auto">
                <ul className="w-full">
                    {messages?.map((message, index) => (
                        <ChatBubble message={message} index={index} />
                    ))}
                    {loading && <li><img src={loadingGif} className="loading-gif" alt="loading..." /></li>}
                </ul>
            </div>
            <div className="relative message-bar">
                <input type="text" value={textMessage} onKeyDown={sendMessage} onChange={e => setTextMessage(e.target.value)} placeholder="ask Dilly!" className="relative block p-3 rounded-[3rem] border-2 bg-white border-[#cecece] w-full" />
                <div role="button" className="absolute right-4 top-3 cursor-pointer" onClick={() => {
                    if(textMessage !== "") {
                        submitMessage(textMessage);
                        setTextMessage("")
                    }
                }}>
                    <SendIcon className="" sx={{ color: "#90b7ab", fontSize: "1.4rem"}} />
                </div>
                
            </div>
        </div>
    )
}