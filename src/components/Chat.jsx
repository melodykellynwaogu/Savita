import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: input,
      isPurchase: input.toLowerCase().includes('buy'), // example detection
      price: input.toLowerCase().includes('buy') ? (Math.random() * 20 + 5).toFixed(2) : null,
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  const handleDelete = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ marginBottom: '10px', position: 'relative' }}>
            <p>{msg.text} {msg.isPurchase && <strong> - ${msg.price}</strong>}</p>
            <button 
              onClick={() => handleDelete(msg.id)} 
              style={{ position: 'absolute', right: 0, top: 0, background: 'transparent', border: 'none', color: 'red', cursor: 'pointer' }}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="Type your message" 
        style={{ width: '80%', padding: '8px' }}
      />
      <button onClick={handleSend} style={{ padding: '8px 12px' }}>Send</button>
    </div>
  );
}

export default Chat;
