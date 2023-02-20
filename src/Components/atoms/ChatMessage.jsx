import Alert from "react-bootstrap/Alert";

function ChatMessage(props) {

    return (
        <Alert variant='info'>
            {props.message}
        </Alert>
    );
}
// [['user', 'message'], ['gpt', 'response']]
// {
//      'user': 'message',
//      'gpt': 'message'
// }
export default ChatMessage;