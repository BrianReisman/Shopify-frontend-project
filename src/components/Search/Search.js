import React, { useState } from "react";
import { SearchRoot, Form, Input, Button, Header } from "./Search.elements";

const Search = ({ savedMovies, elevateInput }) => {
  const [input, setInput] = useState("good will hunting");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    elevateInput(input.trim());
    setInput(input.trim())
  };

  return (
    <SearchRoot>
      <Header>
        Nominate up to 5 movies!
        <p>You have {5 - savedMovies.length} more movies you can nominate.</p>
      </Header>

      <Form onSubmit={submitHandler}>
        <Input
          // disabled={inputDisabled}
          placeholder="Enter movie title..."
          type="search"
          value={input}
          onChange={changeHandler}
        />
        <Button>Search</Button>
      </Form>
    </SearchRoot>

    // {/* {saved ? (
    //   <Message green>
    //     We've added {lastMovie} to your nominated list. You've got //4 left
    //   </Message>
    // ) : null} */}
  );
};

export default Search;
