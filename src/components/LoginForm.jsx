import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../utils/axiosHelper";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  let initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  let inputFields = [
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      value: form.email,
    },
    {
      id: "password",
      label: "password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      value: form.password,
    },
  ];

  const handleOnChange = (event) => {
    let tempForm = { ...form };
    tempForm[event.target.name] = event.target.value;
    // tempForm["email"]
    // tempForm["userName"] =

    setForm(tempForm);
  };

  const handleOnSubmit = async (event) => {
    // prevents reloading
    event.preventDefault();
    alert("Form submitted");

    // make a create user post request
    // axios call
    // {username, email, password}
    let data = await loginUser(form);

    console.log("response from post user", data);

    // if success go to login form
    // else do nothing
    if (data.status) {
      toast.success(data.message);
      navigate("/dashboard");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div>
      <h1>login page</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item) => {
          return <CustomInput {...item} onChange={handleOnChange} />;
        })}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
