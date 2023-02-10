import ChatMessage from "../atoms/ChatMessage";

function ChatOutput(props) {

    return (
        <div className='chat-container'>
            {props.messages.map((message, index) => {
                return <ChatMessage key={index} message={message} />
            })}
        </div>
    )
}

export default ChatOutput