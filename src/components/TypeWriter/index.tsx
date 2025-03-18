import { useEffect, useState } from "react"

interface Props {
    text: string
}

export default function TypeWriter({ text }:Props) {
    const [typingText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(index < text.length) {
            const timeOut = setTimeout(() => {
                setTypedText(prev => prev + text[index]);
                setIndex(prev => prev + 1);
            }, 20)

            return () => {
                clearTimeout(timeOut);
            }
        }        
    }, [text, index])

    return typingText
}