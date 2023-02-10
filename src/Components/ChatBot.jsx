import { useState, useEffect } from "react";
import ChatOutput from "./molecules/ChatOutput";
import ChatInput from "./molecules/ChatInput";

export default function ChatBot() {
  const [input, setInput] = useState('Please type!');
  const [messages, setMessages] = useState ([]);

  useEffect(() => {
      console.log(messages);
  }, [messages]);

  return (
      <>
          <ChatOutput  messages={messages}/>
          <ChatInput setInput={setInput} input={input} messages={messages}  setMessages={setMessages} />
      </>
  )
}







// import React, { useState } from 'react';
// import openai from 'react-openai-api';
//
// function ChatGPT() {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');
//
//   const handleInputChange = event => {
//     setInput(event.target.value);
//   };
//
//   const handleSubmit = async event => {
//     event.preventDefault();
//     openai.apiKey = process.env.REACT_APP_API_KEY;
//     const responseData = await openai.Completion.create({
//       prompt: `You: ${input}\nBot:`,
//       model: 'text-davinci-002',
//       max_tokens: 100,
//     });
//     setResponse(responseData.choices[0].text);
//   };
//
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={input} onChange={handleInputChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         {response}
//       </div>
//     </div>
//   );
// }
//
// export default ChatGPT;
