import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ name, onSearch, placeholder = "Search", ...rest }) => {
  return (
    <Form onSubmit={onSearch}>
      <Form.Control
        className="form-search"
        id={name}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
      <span className="fas fa-search form-search-icon"></span>
    </Form>
  );
};

export default Search;
