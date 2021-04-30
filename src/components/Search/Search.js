import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Display,
  Img,
  CardInfo,
  MovieCard,
  Span,
} from "./SearchElements";
import { ViewHeader, ViewRoot, Text, Message } from "../../GlobalComponents";
import axios from "axios";

const Search = ({ setSavedMovies, savedMovies }) => {
  const [input, setInput] = useState("");
  const [currMovie, setCurrMovie] = useState({});
  // const [error, setError] = useState(false);
  // const [saved, setSaved] = useState(false);
  // let lastMovie = savedMovies.pop();

  const changeHandler = (e) => {
    setInput(e.target.value);
    // setError(false);
    // setSaved(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      // setError(true);
      setCurrMovie("");
      return;
    }

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
      // return setSaved(true);
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
        {/* {error ? <Message red>A film title is required</Message> : null} */}
        <Input type="search" value={input} onChange={changeHandler} />
        <Button>Search</Button>
      </Form>
      {/* {saved ? (
        <Message green>
          We've added {lastMovie} to your nominated list. You've got //4 left
        </Message>
      ) : null} */}
      {currMovie && (
        <Display>
          <MovieCard>
            <Img src={currMovie.Poster} alt="movie poster" />
            <CardInfo>
              <p>
                <Span>Title:</Span> {currMovie.Title}
              </p>
              <p>
                <Span>Director:</Span> {currMovie.Director}
              </p>
              <p>
                <Span>Cast:</Span> {currMovie.Actors}
              </p>
              <p>
                <Span>Writer:</Span> {currMovie.Writer}
              </p>
              <p>
                <Span>Year:</Span> {currMovie.Year}
              </p>
              <Button onClick={nominateHandler}>Nominate This Movie!</Button>
            </CardInfo>
          </MovieCard>
        </Display>
      )}
    </ViewRoot>
  );
};

export default Search;
