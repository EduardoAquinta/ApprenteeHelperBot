// import Enzyme, {mount} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ChatBot from "./Components/ChatBot";
import Avatar from "./Components/atoms/Avatar";
import ChatOutput from "./Components/molecules/ChatOutput";
const https = require('https');
const assert = require('assert');
const apiURL = process.env.REACT_APP_API_KEY

describe("Tests for the header component", () =>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Apprentee Chatbot Helper/i);
    expect(linkElement).toBeInTheDocument();
  });
})

describe("Tests for the Avatar feature", () =>{
  test('renders Avatar component with an image', () => {
    render(<Avatar user={true} />);
    const imageElement = screen.getByAltText(/avatar/i);
    expect(imageElement).toHaveAttribute('src', expect.stringMatching(/\.jpg|\.png/i));
  });

  test('renders Avatar component with a default image for ai response. assets/robot.png or assets/robot.jpg', () => {
    render(<Avatar />);
    const imageElement = screen.getByAltText(/avatar/i);
    expect(imageElement).toHaveAttribute('src', expect.stringMatching(/robot\.jpg|robot\.png/i));
  });

  test('ChatOutput outputs correct text', () => {
    render(<ChatOutput messages={['test message']} />);
    const chatMessage = screen.getByText(/test message/i);
    expect(chatMessage).toHaveTextContent('test message');
  });

  test('ChatOutput component shows image and chat message', () => {
    render(<ChatOutput messages={['test message']} />);
    const chatMessage = screen.getByText(/test message/i);
    const imageElement = screen.getByAltText(/avatar/i);
    const chatContainer = screen.getByTestId('chat-container');
    expect(chatContainer).toContainElement(chatMessage)
    expect(chatContainer).toContainElement(imageElement)
  });
});

describe("Tests for the curl https://api.openai.com/v1/completions \\\n" +
    "  -H 'Content-Type: application/json' \\\n" +
    "  -H 'Authorization: Bearer YOUR_API_KEY' \\\n" +
    "  -d '{\n" +
    "  \"model\": \"text-davinci-003\",\n" +
    "  \"prompt\": \"Say this is a test\",\n" +
    "  \"max_tokens\": 7,\n" +
    "  \"temperature\": 0\n" +
    "}'chat bot component, front end elements", () => {
  test('should render a textbox on the screen for the user to use', () => {
    render(<ChatBot />);
    const linkElement = screen.getByRole("textbox");
    expect(linkElement).toBeInTheDocument();
  });
  test('should render button on the screen to click', () => {
    render(<ChatBot />);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toBeInTheDocument();
  })
  it('should update state when input is changed', () => {
    render(<ChatBot />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'John' } });
    expect(input.value).toBe('John');
  });
});

describe('ChatGPT api back end tests', () => {
  test('should return status code 200', (done) => {
    const options = {
      hostname: 'api.openai.com',
      port: 443,
      path: '/v1/engines/davinci-codex/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiURL}`
      }
    };
    const req = https.request(options, (res) => {
      assert.equal(res.statusCode, 200);
      done();
    });
    req.write(JSON.stringify({
      prompt: "What is the current weather in New York City?",
      max_tokens: 128
    }));
    req.end();
  });
});

describe("Tests for the chat bot component, back end elements", () => {

  //test for connection  - positive (ie status 200)
    // test for negative connection (404)
    //test for valid response (is it what you'd expect back)


});

// Code example from Chat GPT:
// it('should update state when input is changed', () => {
//   const { getByLabelText } = render(<Input />);
//   const input = getByLabelText('Name:');
//   fireEvent.change(input, { target: { value: 'John' } });
//   expect(input.value).toBe('John');
// });

// it('should call submit callback when form is submitted', () => {
//   const submitCallback = jest.fn();
//   const { getByText } = render(<Input onSubmit={submitCallback} />);
//   const submitButton = getByText('Submit');
//   fireEvent.click(submitButton);
//   expect(submitCallback).toHaveBeenCalled();
// });