import React, { useState } from "react";
import { Form, Input, Button } from "./SearchElements";
import { ViewHeader, ViewRoot } from "../../GlobalComponents";
import axios from "axios";

const Search = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(process.env);
    axios
      .get(`http://www.omdbapi.com/?apikey=c951a210&t=${input}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setInput("");
  };

  return (
    <ViewRoot>
      <ViewHeader>dsf</ViewHeader>
      <Form onSubmit={submitHandler}>
        <Input type="search" value={input} onChange={changeHandler} />
        <Button>Search</Button>
      </Form>
    </ViewRoot>
  );
};

export default Search;
