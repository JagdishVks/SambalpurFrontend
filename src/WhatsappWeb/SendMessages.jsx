import { useState } from "react";
const SendMessage=()=>{
    const [message, setMessage] = useState("");

    const recipient = '+1234567890'; 
    const samplmessage = 'Hello, this is a test message from our WhatsApp CRM!'; 
    const sendMessage = async () => {
        await fetch('/api/messages/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to: 'recipient', body: message })
        });
        setMessage(""); // Clear input after sending
    };

    return (
        <div  className="bg-green-100 w-full   flex justify-around ">
            <input   className="bg-green-100 w-[80%] my-2 border-0 border-transparent focus:ouline-none p-2"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default SendMessage;
