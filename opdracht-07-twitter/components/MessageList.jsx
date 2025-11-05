import Message from "./Message";

const MessageList  = ({name, message}) => {
    return (
(message.map((msg, index) => (
    <p key={index}><strong>{name}:</strong> {msg}</p> 
 )) ));
};
 
export default MessageList ;