export const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "fullname",
    type: "text",
    placeholder: "Full Name",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    label: "Full Name",
    required: true,
  },
  {
    id: 4,
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    errorMessage: "",
    label: "Birthday",
  },
  {
    id: 5,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 6,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords dont't match!",
    label: "Confirm Password",
    pattern: "",
    required: true,
  },
];

export const inputState = {
  username: "",
  email: "",
  fullname: "",
  birthday: "",
  password: "",
  confirmPassword: "",
};
