import Button from 'react-bootstrap/Button';
import {Form, FormControl, InputGroup} from "react-bootstrap";

export default function ChatBot() {
  return (
     <Form>
         <FormControl type="text" placeholder={"Please input here"}/>
        <Button type="submit" variant="warning" size="lg">Submit</Button>
     </Form>  )
}






// import React, { useState } from 'react';
// import openai from 'openai';
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
//     openai.apiKey = "YOUR_API_KEY_HERE";
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
