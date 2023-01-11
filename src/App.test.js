import { render, screen } from '@testing-library/react';
import App from './App';
import ChatBot from "./Components/ChatBot";


describe("Tests for the header component", () =>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Apprentee Chatbot Helper/i);
    expect(linkElement).toBeInTheDocument();
  });
})

describe("Tests for the chat bot component", () => {
  test('should have a textbox on the screen for the user to use', () => {
    render(<ChatBot />);
    const linkElement = screen.getByRole("textbox");
    expect(linkElement).toBeInTheDocument();
  });
});