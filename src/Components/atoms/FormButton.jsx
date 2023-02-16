import Button from 'react-bootstrap/Button';

export default function FormButton(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.handleUserInput()
        // e.target.value = ''
    }
    return (
            <Button type="submit" variant="warning" size="lg" onClick={handleClick}>Submit</Button>
 )
}