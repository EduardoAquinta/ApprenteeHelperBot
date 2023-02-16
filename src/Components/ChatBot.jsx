import { useState, useEffect } from "react";
import ChatOutput from "./molecules/ChatOutput";
import ChatInput from "./molecules/ChatInput";

export default function ChatBot() {
  const [input, setInput] = useState('Please type!');
  const [messages, setMessages] = useState ([]);
  const [userLastMessage, setUserLastMessage] = useState(false)


  useEffect(() => {
      console.log(messages);
      if (userLastMessage) {
          // Send me to the API!
          const userMessage = messages.slice(-1);

          // Add me to the messages array to display!
          // messages.push('Test response from API. Your last message was: ' + userMessage)

          fetch('https://uselessfacts.jsph.pl/random.json?language=en', {
              method: 'GET'
          })
              .then((res) => res.json())
              .then((data) => {
                  const prevmessages = [...messages];
                  prevmessages.push(data.text)
                  setMessages(prevmessages);
              })

          // Allow user to submit a new message.
          setUserLastMessage(false)
      }
  }, [messages, userLastMessage]);


  return (
      <>
          <ChatOutput messages={messages}/>
          <ChatInput userLastMessage={userLastMessage}
                     setUserLastMessage={setUserLastMessage}
                     setInput={setInput}
                     input={input}
                     messages={messages}
                     setMessages={setMessages} />
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
