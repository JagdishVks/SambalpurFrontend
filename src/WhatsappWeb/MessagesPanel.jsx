import React, { useEffect, useState } from 'react';
import SendMessage from './SendMessages';

function MessagesPanel() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const staticMessages = [
            { id: 1, from: '+1234567890', body: 'Hello, this is a test message!' },
            { id: 2, from: '+0987654321', body: 'Hi there! How can I help you?' },
            { id: 3, from: '+1234567890', body: 'Just checking in to see how it works.' },
            
            { id: 1, from: '+1234567890', body: 'Hello, this is a test message!' },
            { id: 2, from: '+0987654321', body: 'Hi there! How can I help you?' },
            { id: 3, from: '+1234567890', body: 'Just checking in to see how it works.' },
            
            { id: 1, from: '+1234567890', body: 'Hello, this is a test message!' },
            { id: 3, from: '+1234567890', body: 'Just checking in to see how it works.' },
            
            { id: 1, from: '+1234567890', body: 'Hello, this is a test message!' }
            
        ];
        fetch('/api/messages')
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error('Error:', error));
        setMessages(staticMessages);
    }, []);

    return (
        <div className='w-[30%]  h-[400px] my-2 rounded-[12px] border-2 border-green-900 my-2 py-2'>
            <h2 className='text-green-950 bg-[#FAFAFA] font-mono text-[20px] max-w-max px-2'>Complaints from Whatsapp</h2>
            <ul className='mx-4 overflow-y-scroll relative h-[350px]'>
                {messages.map((msg, index) => (
                    <li   className={`  text-green-950 py-3 px-2 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF2]'}`} key={index}>
                        <strong  className={`px-2 `}>{msg.from}:</strong> {msg.body}
                    </li>
                ))}
                <div className="sticky bottom-0 w-full px-2">

                   <SendMessage/>
                </div>
            </ul>
        </div>
    );
}

export default MessagesPanel;
 