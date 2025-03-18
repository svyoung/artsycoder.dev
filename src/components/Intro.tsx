import { useEffect, useState } from "react";
import Chatbox from "./Chatbox/index";
import TypeWriter from "./TypeWriter";
import { getOpenAIResponse, MessageType } from "../../utils/chatClient";

const introMessage = "Hi! I am Sam and welcome to my page. To get started, I have my personal assistant, Dilly, to help you out when any questions about me. She will mainly give you information about my professional experience, but she might be able to tell you what my favorite dessert is, too. Maybe... :)"

export default function IntroPage() {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [showIntroMsg, setShowIntroMsg] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    // remove page load intro message when a chat is initiated
    useEffect(() => {
        if(showIntroMsg === true && messages.length > 0) setShowIntroMsg(false);
    }, [messages, showIntroMsg])

    const submitMessage = async (msg: string) => {
        setLoading(true);
        try {
            setMessages(prev => [...prev, {role: "user", content: msg}]);
            let streamResponse = "";
            await getOpenAIResponse(msg, (chunk) => {
                streamResponse += chunk;
                setMessages((prevMessages) => {
                  if (prevMessages.length > 0 && prevMessages[prevMessages.length - 1].role === "assistant") {
                    return prevMessages.map((msg, i) =>
                      i === prevMessages.length - 1 ? { ...msg, content: streamResponse } : msg
                    );
                  } else {
                    return [...prevMessages, { role: "assistant", content: streamResponse }];
                  }
                });
            });
            setLoading(false);
        } catch(e) {
            setLoading(false);
            console.log("There was an error sending a message.", e);
        }
    }

    return (
        <div className="shadow-lg">
            <div className="chatbox-wrapper border border-[#efefef] p-3 sm:px-4 rounded-xl min-h-90 h-[100vh] justify-between relative">
                {showIntroMsg && <div className="absolute m-4 top-0 left-0 right-0 bottom-0">
                    <TypeWriter text={introMessage} />
                </div>}
                <div className="relative overflow-hidden">
                    <Chatbox messages={messages} loading={loading} submitMessage={submitMessage} />
                </div>
            </div>
            
        </div>
    )
}