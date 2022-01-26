import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AuthForm({ initialFormState, action }) {
  const [formData, setFormData] = useState(initialFormState);
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await action(formData);
    setFormData(initialFormState);
  }

  return (
    <Form>
      {Object.keys(formData).map((key) => (
        <FormGroup>
          <Label to={key}></Label>
          <Input
            type={key === "password" ? "password" : "text"}
            id={key}
            name={key}
            value={formData[key]}
            placeholder={key}
            onChange={handleChange}
          />
        </FormGroup>
      ))}
    </Form>
  );
}

export default AuthForm;
