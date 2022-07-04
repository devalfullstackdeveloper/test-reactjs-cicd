
import InputTypeText from "./formBuilder/inputBuilder/InputTypeText";

function App() {
  return (
    <div>
        Hello There
        <InputTypeText 
          className="test"
          name="first name"
          />
        <InputTypeText 
          className="test"
          name="last name"
        />
    </div>
  );
}

export default App;
