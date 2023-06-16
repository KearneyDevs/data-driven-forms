# Data Driven Forms with React

The idea of this small project is to create forms, labels, elements and functions all from an array of objects. The goal is to use minimal code to achieve it using Reactjs.

I have not thought out all the steps as of yet, but will document each step as I go.

# Method One

## Using FormData and Object.fromEntries()

### FormData() constructor

An HTML form element — when specified, the FormData object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.

### Object.fromEntries()

The `Object.fromEntries()` static method transforms a list of key-value pairs into an object.

```js
function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(Object.fromEntries(data.entries()));
}

return (
  <div className="app">
    <form onSubmit={handleSubmit}>
      <FormInput name="username" placeholder="Username" />
      <FormInput name="email" placeholder="Email" />
      <FormInput name="fullname" placeholder="Full Name" />
      <button>Submit</button>
    </form>
  </div>
);
```

Above I have created a handleSubmit function which will fire when the submit button is clicked. Within the function I have assigned a const data variable to `new FormData(e.target)`. From there I then pass in the e.target and then apply the data.entries to the Object.fromEntries method.

Now to confirm, the entries is within the FormData, see below that I have done another console.log within the submit function which will show the entries iterator.

```js
function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data);
}
```

We need to be able to access the key value pairs within entries. To do so we then use Object methods which transforms the key value pairs into an object like below when submit is selected.

```js
function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(Object.fromEntries(data.entries()));
}
```

```json
{
  "username": "John",
  "email": "johndoe@gmail.com",
  "fullname": "John Doe"
}
```

I found this way to be quite clean, but would like to explore other paths to see what the best possible solution might be. Again, I am using react, so I want to lean on what it has to offer.

# Method Two

## Using the useState hook

While we could use multiple useState hooks for each respective field, I thought it best to explore using just one piece of state that would be an object that stores the key value pairs and update them accordingly with each input field.

I also thought it best to create an array of objects, each containing the key value pairs required for each input.

```js
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
```

This is pretty straight forward, from here would then map out our FormInput component based on the array of inputs.

```js
{
  inputs.map((input) => (
    <FormInput
      key={input.id}
      {...input}
      value={values[input.name]}
      onChange={handleChange}
    />
  ));
}
```
