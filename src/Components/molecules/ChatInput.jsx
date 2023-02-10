import {Form} from "react-bootstrap";
import FormInput from "../atoms/FormInput";
import FormButton from "../atoms/FormButton";

function ChatInput(props) {

    function handleUserInput() {
        const prevmessages = [...props.messages];
        prevmessages.push(props.input);
        // Send props.input to API here??
        props.setMessages(prevmessages);
    }

    return (
        <Form>
            <FormInput setInput={props.setInput} input={props.input} />
            <FormButton handleUserInput={handleUserInput} />
        </Form>
    )
}

export default ChatInput