import { useState, useEffect, useRef } from "react";
import ChatOutput from "./molecules/ChatOutput";
import ChatInput from "./molecules/ChatInput";
const apiURL = process.env.REACT_APP_API_KEY


export default function ChatBot() {
  const [input, setInput] = useState('');
  const [inputEnabled, setInputEnabled] = useState(true);
  const [buttonEnabled, setButtonEnabled] = useState( true);
  const [messages, setMessages] = useState ([]);
  const [userLastMessage, setUserLastMessage] = useState(false);
  const [apiError, setApiError] = useState(false);


  useEffect(() => {
      console.log(messages);
      if (userLastMessage) {
          // Send me to the API!
          //const userMessage = messages.slice(-1);

          setInputEnabled(false);
          setButtonEnabled(false);

          fetch('https://api.openai.com/v1/completions', {
              body: JSON.stringify({
                  'model': 'text-davinci-003',
                  'prompt': input,
                  'temperature': 0.86,
                  'max_tokens': 256
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
                  if (data.hasOwnProperty('error')) {
                      prevmessages.push(data.error.message);
                      setApiError(true);
                  } else {
                      prevmessages.push(data.choices[0].text.substring(2));
                  }
                  setMessages(prevmessages);
                  setInput("")
              })
              .catch((error) =>{
              console.log(`Error: ${error.message}`) })
              .finally(() => {
              setInputEnabled(true);
              setButtonEnabled(true);
              setApiError(false);
          })

          setUserLastMessage(false)

      }
  }, [messages, userLastMessage]);

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [inputEnabled]);

  return (
      <>
          <ChatOutput apiError={apiError} messages={messages}/>
          <ChatInput userLastMessage={userLastMessage}
                     setUserLastMessage={setUserLastMessage}
                     setInput={setInput}
                     input={input}
                     messages={messages}
                     setMessages={setMessages}
                     inputEnabled={inputEnabled}
                     buttonEnabled={buttonEnabled}
          />
      </>
  )
}

