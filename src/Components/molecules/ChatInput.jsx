import {Form} from "react-bootstrap";
import FormInput from "../atoms/FormInput";
import FormButton from "../atoms/FormButton";

function ChatInput(props) {



    function handleUserInput() {
        if (!props.userLastMessage) {
            const prevmessages = [...props.messages];
            prevmessages.push(props.input);
            props.setUserLastMessage(true);
            props.setMessages(prevmessages);
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