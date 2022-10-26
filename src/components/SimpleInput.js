import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredValue, setValue] = useState("")
  const [touched, setTouched] = useState(false);

  const valid = enteredValue.trim()!=="";
  const nameinputisinvalid = !valid && touched;

  // If there are muntiple inputs we need to check the inputvalidity of all the inputs
  // Threfore we can use the below syntax

  // let formisvalid = false;

  // if (valid){
  //   formisvalid = true;
  // }

  const inputChangehandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched(true);
    if (!valid) {
      return;
    } 
    setValue("");
    setTouched(false);
  } 

  const inputfocushandler =  (event) => {
    setTouched(true);
  }

  const formStyle = nameinputisinvalid ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={formStyle}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value = {enteredValue} onChange = {inputChangehandler} onBlur = {inputfocushandler}/>
        {nameinputisinvalid && <p className = "error-text">The field should not be emplty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
