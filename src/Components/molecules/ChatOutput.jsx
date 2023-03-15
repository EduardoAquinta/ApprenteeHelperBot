import ChatMessage from "../atoms/ChatMessage";
import Avatar from "../atoms/Avatar";
import './css/chatoutput.css';


function ChatOutput(props) {

    return (
        <div className='chat-container'>
            {props.messages.map((message, index) => {
                let variantType = 'info';
                let user = true;
                let className = 'chat-output';
                if (index % 2 !== 0) {
                    variantType = 'warning';
                    user = false
                    className += ' ai-chat-output'
                    if (props.apiError === true) {
                        variantType = 'danger';
                    }
                }
                return (
                    <div key={index} className={className} >
                        <Avatar user={user} />
                        <ChatMessage variant={variantType} message={message} />
                    </div>
                )
            })}
        </div>
    )
}

export default ChatOutput