import React from "react";
import SearchRoot, { Form, Input, Button } from "./SearchElements";
import { ViewHeader, ViewRoot } from "../../GlobalComponents";

const Search = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("submitted!");
  };

  return (
    <ViewRoot>
      <ViewHeader>dsf</ViewHeader>
      <Form onSubmit={submitHandler}>
        <Input type="search" />
        <Button>Search</Button>
      </Form>
    </ViewRoot>
  );
};

export default Search;
