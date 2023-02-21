import Alert from "react-bootstrap/Alert";

function ChatMessage(props) {

        return (
            <Alert variant={props.variant}>
                {props.message}
            </Alert>
        )
}

export default ChatMessage;