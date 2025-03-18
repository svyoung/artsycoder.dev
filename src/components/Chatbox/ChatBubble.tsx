import { Message} from "../../types/types";

interface Props {
    message: Message,
    index: number
}

export default function ChatBubble({message, index}:Props) {
    return (
        <li key={message.content + index} className="relative">
            <div className={`
                ${message.role === "user" ? 
                    "bg-[#8ab1a5] ml-[auto] text-white mr-[10px]"
                    : 
                    "bg-[#ffffff] ml-[10px]"
                }
                relative my-3 py-1 px-4 max-w-max lg:w-[60%] rounded-xl break-words shadow-md relative z-[100]`}
            >
                {message.content}
                <div className={`${message.role === "user" ? "right-[-9px] bg-[#8ab1a5]": "bg-white left-[-10px]"} bottom-[-5px] absolute w-[18px] h-[18px] rounded-xl shadow-md z-[10]`}></div>
            </div>
            
        </li>
    )
}