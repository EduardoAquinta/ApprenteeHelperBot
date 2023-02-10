import Alert from "react-bootstrap/Alert";

function ChatMessage(props) {

    return (
        <Alert variant='info'>
            {props.message}
        </Alert>
    );
}

export default ChatMessage;