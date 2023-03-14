import {FormControl} from "react-bootstrap";
import {useEffect, useRef} from "react";

export default function FormInput(props) {

    const inputEl = useRef(null)

    useEffect(() => {
        inputEl.current.focus();
    }, [props.inputEnabled]);
    function handleChange(e) {
        e.preventDefault();
        props.setInput(e.target.value)
    }

    return (
        <FormControl autoFocus={true} ref={inputEl} type="text" placeholder={"Please Type!"} value={props.input} onChange={handleChange} disabled={!props.inputEnabled} />
    )
}