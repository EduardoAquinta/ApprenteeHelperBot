import Button from 'react-bootstrap/Button';

export default function FormButton() {
    const handleClick = (e) => {
        console.log("clicked!");
    }
    return (
            <Button type="submit" variant="warning" size="lg" onClick={handleClick}>Submit</Button>
 )
}