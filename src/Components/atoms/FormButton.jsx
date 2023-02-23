import Button from 'react-bootstrap/Button';

export default function FormButton(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.handleUserInput()
    }
    return (
        <div className="submit-button">
            <Button type="submit" variant="warning" size="lg" onClick={handleClick} disabled={!props.buttonEnabled}>Submit</Button>
        </div>
 )
}