import React, { useState } from "react";
import { Form, Input, Button, Display } from "./SearchElements";
import { ViewHeader, ViewRoot, Text } from "../../GlobalComponents";
import axios from "axios";

const Search = ({ setSavedMovies, savedMovies }) => {
  const [input, setInput] = useState("");
  const [currMovie, setCurrMovie] = useState({});

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?apikey=c951a210&t=${input}`)
      .then((res) => {
        setCurrMovie(res.data);
      })
      .catch((err) => {
        // !! Add error message. Modal?
        console.log(err);
      });

    setInput("");
  };

  const nominateHandler = (e) => {
    if (!currMovie.Title) {
      return;
    }
    if (savedMovies.length === 0) {
      setSavedMovies([currMovie]);
      return setCurrMovie("");
    }

    let exists = false;
    savedMovies.forEach((movie) => {
      if (currMovie.imdbID === movie.imdbID) {
        exists = true;
      }
    });

    if (!exists) {
      setSavedMovies([...savedMovies, currMovie]);
      return setCurrMovie("");
    } else {
      alert(
        `You've already nominated ${currMovie.Title}! Didn't mean to? Visit your Nominated tab to remove it from your selection.`
      );
    }
  };

  return (
    <ViewRoot>
      <ViewHeader>Search Movie Database</ViewHeader>
      <Text>
        You have {5 - savedMovies.length} more movies you can nominate. Choose
        wisely!
      </Text>
      <Form onSubmit={submitHandler}>
        <Input type="search" value={input} onChange={changeHandler} />
        <Button>Search</Button>
      </Form>
      <Display>
        <p>{currMovie.Title}</p>
        <Button onClick={nominateHandler}>Nominate Movie</Button>
      </Display>
    </ViewRoot>
  );
};

export default Search;
