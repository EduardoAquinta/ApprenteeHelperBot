import Alert from "react-bootstrap/Alert";
import TypeWriterEffect from 'react-typewriter-effect';
import './css/chatmessage.css';

function ChatMessage(props) {
    const Typing = () => {
        if(props.variant === "warning" || props.variant === 'danger') {
            return (
                <TypeWriterEffect
                    textStyle={{fontFamily: 'Lato',
                    fontSize: 'large'
                    }}
                    startDelay={100}
                    cursorColor="black"
                    text={props.message}
                    typeSpeed={40}
                    hideCursorAfterText={true}
                />)
            }
        else {
            return (props.message)
        }
    }

    let className = 'chat-message';

    if (props.variant === 'warning') {
        className += ' ai-chat-message';
    }

    return (
        <Alert className={className} variant={props.variant}>
            <span>{Typing()}</span>
        </Alert>
    )
}

export default ChatMessage;