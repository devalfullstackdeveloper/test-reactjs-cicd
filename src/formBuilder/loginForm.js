import InputTypeText from "./formBuilder/inputBuilder/InputTypeText";

function LoginForm() {
    return (
      <div>
            Login Form
            <InputTypeText 
                type="text"
                className="test"
                name="username"
            />
            <InputTypeText
                type="password" 
                className="test"
                name="password"
            />
      </div>
    );
  }
  
  export default LoginForm;