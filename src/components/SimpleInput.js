import useInput from "../Hooks/use-input.js";

const SimpleInput = (props) => {

  const {
    enteredValue:nameValue, 
    valid:nameValid, 
    inputisInvalid:nameisInvalid, 
    reset:resetName,
    inputChangehandler:nameChangehandler, 
    inputfocushandler:namefocushandler
  } = useInput(value => {return value.trim() !== ''});

  const {
    enteredValue:emailValue, 
    valid:emailValid, 
    inputisInvalid:emailisInvalid, 
    reset:resetEmail,
    inputChangehandler:emailChangehandler, 
    inputfocushandler:emailfocushandler
  } = useInput(value => value.includes("@"));


  // If there are muntiple inputs we need to check the inputvalidity of all the inputs
  // Threfore we can use the below syntax


  let formisvalid = false;

  if (nameValid && emailValid){
    formisvalid = true;
  }

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    resetName();
    resetEmail();
  } 

  

  const formStylename = nameisInvalid ? 'form-control invalid' : 'form-control';
  const formstyleemail = emailisInvalid ? 'form-control invalid': 'form-control';
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={formStylename}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value = {nameValue} onChange = {nameChangehandler} onBlur = {namefocushandler}/>
        {nameisInvalid && <p className = "error-text">The field should not be emplty</p>}
      </div>
      <div className={formstyleemail}>
        <label htmlFor='email'>Email Address</label>
        <input type='email' id='email' value = {emailValue} onChange = {emailChangehandler} onBlur = {emailfocushandler}/>
        {emailisInvalid && <p className = "error-text">pleas eneter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled = {!formisvalid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
