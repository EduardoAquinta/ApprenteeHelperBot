import Button from 'react-bootstrap/Button';

export default function FormButton(props) {
    const handleClick = (e) => {
        e.preventDefault();
        const prevchat = [...props.chat];
        prevchat.push(props.input);
        props.setChat(prevchat);
    }
    return (
            <Button type="submit" variant="warning" size="lg" onClick={handleClick}>Submit</Button>
 )
}