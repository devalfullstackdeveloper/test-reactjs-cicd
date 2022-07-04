
function InputTypeText(props) {
    const {
      name,
      className,
      type
    } = props;

    return (
      <input 
          type={type} 
          name={name}
          className={className}
          />
    );
  }
  
  export default InputTypeText;
