import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    birthday: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
    },
    {
      id: 4,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
  }

  function handleChange(e) {
    console.log(e.target.name);
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
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
