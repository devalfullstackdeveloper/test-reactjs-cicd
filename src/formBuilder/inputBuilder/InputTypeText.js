
function InputTypeText(props) {
    const {
      name,
      className
    } = props;
    return (
      <input type="text" name={name} className={className}/>
    );
  }
  
  export default InputTypeText;
