import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SimpleForm() {
  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Input box</Form.Label>
          <Form.Control id="TextInput" placeholder="input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">
            Disabled input box
          </Form.Label>
          <Form.Control
            id="disabledTextInput"
            placeholder="Disabled input"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" id="FieldsetCheck" label="check this" />
          <Form.Check
            disabled
            type="disabledCheckbox"
            id="disabledFieldsetCheck"
            label="cannot check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}
export default SimpleForm;
