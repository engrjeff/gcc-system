import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ name, placeholder, value, onSearch, ...rest }) => {
  const handleChange = ({ currentTarget: input }) => {
    onSearch(input.value);
  };
  return (
    <Form>
      <Form.Control
        className="form-search"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <span className="fas fa-search form-search-icon"></span>
    </Form>
  );
};

Search.defaultProps = {
  placeholder: "Search",
};

export default Search;
