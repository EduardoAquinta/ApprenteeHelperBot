import {Form} from "react-bootstrap";
import FormInput from "../atoms/FormInput";
import FormButton from "../atoms/FormButton";
import {useState} from "react";
import useChatGpt from "../hooks/useChatGPT";

function ChatInput(props) {

    const [userLastMessage, setUserLastMessage] = useState(false)

    function handleUserInput() {
        if (!userLastMessage) {
            const prevmessages = [...props.messages];
            prevmessages.push(props.input);
            props.setMessages(prevmessages);
            setUserLastMessage(true);

            // Send props.input to API here??
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useChatGpt()
        }
    }

    return (
        <Form>
            <FormInput setInput={props.setInput} input={props.input} />
            <FormButton handleUserInput={handleUserInput} />
        </Form>
    )
}

export default ChatInput