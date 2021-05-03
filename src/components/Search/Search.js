import React, { useState } from "react";
import { SearchRoot, Form, Input, Button, Header } from "./Search.elements";
import axios from "axios";

const Search = ({ movies, setMovies, setTotalResults }) => {
  const [input, setInput] = useState("good will hunting");
  const [page] = useState(1);
  // console.log("page", page); //!rigth now page keeps increasing

  // const [disabled, setDisabled] = useState(false);

  // useEffect(() => {
  //   if (savedMovies.length === 5) {
  //     setDisabled(true);
  //   } else {
  //     setDisabled(false);
  //   }
  // }, [savedMovies]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  // const checkIfNominated = (title) => {
  //   savedMovies.forEach((mov) => {
  //     if (mov.Title === title) {
  //       setDisabled(true);
  //     } else {
  //       setDisabled(false);
  //     }
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?apikey=c951a210&s=${input}&page=${page}`)
      .then((res) => {
        // console.log(res.data); //an array of 0-9. nex
        // console.log(res.data.Search); //an array of 0-9. nex
        if (res.data.Response === "False") {
          // !! Add error message. Modal?
          console.log("no movie by that title found");
          setMovies([]);
          setInput("");
          setTotalResults(0);
        } else {
          setTotalResults(res.data.totalResults);
          setMovies(res.data.Search);
          // setPage(page + 1);
        }
      })
      .catch((err) => {
        // !! Add error message. Modal?
        console.log(err);
      });
  };

  // const nominateHandler = (e) => {
  //   if (!currMovie.Title) {
  //     return;
  //   }
  //   if (savedMovies.length === 0) {
  //     setSavedMovies([currMovie]);
  //     return setCurrMovie("");
  //   }

  //   let exists = false;
  //   savedMovies.forEach((movie) => {
  //     if (currMovie.imdbID === movie.imdbID) {
  //       exists = true;
  //     }
  //   });

  //   if (!exists) {
  //     setSavedMovies([...savedMovies, currMovie]);
  //     return setCurrMovie("");
  //     // return setSaved(true);
  //   } else {
  //     alert(
  //       `You've already nominated ${currMovie.Title}! Didn't mean to? Visit your Nominated tab to remove it from your selection.`
  //     );
  //   }
  // };

  return (
    <SearchRoot>
      <Header>
        Nominate up to 5 movies!
        <p>You have {5 - 5} more movies you can nominate.</p>
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

    //  <Button disabled={disabled} onClick={nominateHandler}>
    //  {disabled
    //? "You've already nominated this movie"
  );
};

export default Search;
