import { useState, useEffect } from "react";
import ChatOutput from "./molecules/ChatOutput";
import ChatInput from "./molecules/ChatInput";
const apiURL = process.env.REACT_APP_API_KEY


export default function ChatBot() {
  const [input, setInput] = useState('');
  const [inputEnabled, setInputEnabled] = useState(true);
  const [messages, setMessages] = useState ([]);
  const [userLastMessage, setUserLastMessage] = useState(false)


  useEffect(() => {
      console.log(messages);
      if (userLastMessage) {
          // Send me to the API!
          const userMessage = messages.slice(-1);

          // Add me to the messages array to display!
          // messages.push('Test response from API. Your last message was: ' + userMessage)

          setInputEnabled(false);

          fetch('https://api.openai.com/v1/completions', {
              body: JSON.stringify({
                  'model': 'text-davinci-003',
                  'prompt': input,
                  'temperature': 0.7,
                  'max_tokens': 128
              }),
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${apiURL}`
              },


          })
              .then((res) => res.json())
              .then((data) => {
                  console.log(data)
                  const prevmessages = [...messages];
                  prevmessages.push(data.choices[0].text);
                  setMessages(prevmessages);
                  setInput("")
              })
              .finally(() => {
              setInputEnabled(true)
          })
          //terminal.echo(json.choices[0].text.trim());
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
                     setMessages={setMessages}
                     inputEnabled={inputEnabled}
          />
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

// $("#terminal").terminal(async function (command, terminal) {
//         try {
//             const prompt = `you are a helpful, knowledge sharing chatbot. I say: ${command}. You reply:`
//             const response = await fetch(
//                 `https://api.openai.com/v1/completions`,
//                 {
//                     body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 256}),
//                     method: "POST",
//                     headers: {
//                         "content-type": "application/json",
//                         Authorization: "Bearer [YOUR API KEY]",
//                     },
//                 }
//             ).then((response) => {
//                 if (response.ok) {
//                     response.json().then((json) => {
//                         terminal.echo(json.choices[0].text.trim());
//                     });
//                 }
//             });
//
//             console.log("Completed!");
//         } catch (err) { console.error(`Error: ${err}`) }
//     },
//     {
//         greetings: 'GPT-3 Chatbot v0.1',
//         name: 'gpt3_demo',
//         height: 400,
//         width: 800,
//         prompt: '> '
//     });
