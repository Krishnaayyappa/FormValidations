import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredValue, setValue] = useState("")
  const [touched, setTouched] = useState(false);

  const [enteredemailValue, setemailValue] = useState("");
  const [emailTouched, setemailTouched] = useState(false);

  const valid = enteredValue.trim()!=="";
  const nameinputisinvalid = !valid && touched;

  const emailValid = enteredemailValue.trim()!=="" && enteredemailValue.includes("@");
  const emailinputisinvalid = !emailValid && emailTouched;

  // If there are muntiple inputs we need to check the inputvalidity of all the inputs
  // Threfore we can use the below syntax

  let formisvalid = false;

  if (valid && emailValid){
    formisvalid = true;
  }

  const inputChangehandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setValue("");
    setemailValue("");
    setTouched(false);
    setemailTouched(false);
  } 

  const inputfocushandler =  (event) => {
    setTouched(true);
  }

  const inputemailchangeHandler = (event) => {
    const input = event.target.value;
    setemailValue(input);
  }

  const emailFocushandler = (event) => {
    setemailTouched(true);
  }

  const formStylename = nameinputisinvalid ? 'form-control invalid' : 'form-control';
  const formstyleemail = emailinputisinvalid ? 'form-control invalid': 'form-control';
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={formStylename}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value = {enteredValue} onChange = {inputChangehandler} onBlur = {inputfocushandler}/>
        {nameinputisinvalid && <p className = "error-text">The field should not be emplty</p>}
      </div>
      <div className={formstyleemail}>
        <label htmlFor='email'>Email Address</label>
        <input type='email' id='email' value = {enteredemailValue} onChange = {inputemailchangeHandler} onBlur = {emailFocushandler}/>
        {emailinputisinvalid && <p className = "error-text">pleas eneter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled = {!formisvalid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
