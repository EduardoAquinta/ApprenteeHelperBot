import {FormControl} from "react-bootstrap";

export default function FormInput(props) {

    function handleChange(e) {
        e.preventDefault();
        props.setInput(e.target.value)
    }

    return (
        <FormControl type="text" placeholder={"Please Type!"} value={props.input} onChange={handleChange} disabled={!props.inputEnabled} />
    )
}