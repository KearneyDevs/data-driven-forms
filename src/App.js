import { useState } from "react";
import "./App.css";
import { inputs, inputState } from "./data/inputData";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState(inputState);

  function handleSubmit(e) {
    e.preventDefault();
    // const data = new FormData(e.target);
    console.log(values);
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs(values.password).map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
