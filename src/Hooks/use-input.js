import { useState } from "react"

const useInput = (isValid) => {
    const [enteredValue, setValue] = useState("")
    const [isTouched, setIsTouched] = useState(false);
   
    const valid = isValid(enteredValue);
    const inputisInvalid = !valid && isTouched;

    const inputChangehandler = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    }

    const inputfocushandler =  (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setValue("");
        setIsTouched(false);
    }

    return {
        enteredValue,
        isTouched,
        valid,
        inputisInvalid,
        reset,
        inputChangehandler,
        inputfocushandler
    };

}

export default useInput;