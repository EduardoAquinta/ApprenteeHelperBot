import ChatMessage from "../atoms/ChatMessage";

function ChatOutput(props) {

    return (
        <div className='chat-container'>
            {props.messages.map((message, index) => {
                let variantType = 'info';
                if (index % 2 !== 0) {
                    variantType = 'warning';
                }
                if (props.apiError === true) {
                    variantType = 'danger';
                }
                return <ChatMessage variant={variantType} key={index} message={message} />
            })}
        </div>
    )
}

export default ChatOutput