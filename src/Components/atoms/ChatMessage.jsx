import Alert from "react-bootstrap/Alert";
import TypeWriterEffect from 'react-typewriter-effect';


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
        return (
            <Alert variant={props.variant}>
                {Typing()}
            </Alert>
        )
}

export default ChatMessage;