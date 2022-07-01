import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const PhoneNumberInput: React.FC = () => {
  return (
    <Dropdown
      onSelect={(input) => {
        const sdsd = input;
      }}
    >
      <Dropdown.Toggle>Country Code</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="option1">US</Dropdown.Item>
        <Dropdown.Item eventKey="option2">China</Dropdown.Item>
        <Dropdown.Item eventKey="option3">England</Dropdown.Item>
        <div>dsfdsf</div>
      </Dropdown.Menu>
    </Dropdown>
  );
};
