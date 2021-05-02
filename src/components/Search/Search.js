import React, { useState, useEffect } from "react";
import {
  SearchRoot,
  Form,
  Input,
  Button,
  Display,
  Img,
  CardInfo,
  MovieCard,
  Span,
  MovieTitle,
} from "./Search.elements";
import {
  Text,
  // Message
} from "../../App.elements";
import axios from "axios";

const Search = ({ setSavedMovies, savedMovies }) => {
  // const [input, setInput] = useState("");
  // const [currMovie, setCurrMovie] = useState({});
  // const [movies, setMovies] = useState([]);
  // const [disabled, setDisabled] = useState(false);
  // const [totalResults, setTotalResults] = useState();
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   if (savedMovies.length === 5) {
  //     setDisabled(true);
  //   } else {
  //     setDisabled(false);
  //   }
  // }, [savedMovies]);

  // const changeHandler = (e) => {
  //   setInput(e.target.value);
  // };

  // const checkIfNominated = (title) => {
  //   savedMovies.forEach((mov) => {
  //     if (mov.Title === title) {
  //       setDisabled(true);
  //     } else {
  //       setDisabled(false);
  //     }
  //   });
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   axios
  //     .get(`https://www.omdbapi.com/?apikey=c951a210&s=${input}&page=${page}`)
  //     .then((res) => {
  //       console.log(res.data); //an array of 0-9. nex
  //       console.log(res.data.Search); //an array of 0-9. nex
  //       if (res.data.Response === "False") {
  //         // !! Add error message. Modal?
  //         console.log("no movie by that title found");
  //       } else {
  //         setTotalResults(res.data.totalResults);
  //         setMovies(res.data.Search);
  //         // setCurrMovie(res.data.search);
  //         // checkIfNominated(res.data.Title);
  //         // setInput("");
  //       }
  //     })
  //     .catch((err) => {
  //       // !! Add error message. Modal?
  //       console.log(err);
  //     });
  // };

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



      <Text>
        {/* You have {5 - savedMovies.length} more movies you can nominate. Choose */}
        wisely!
      </Text>
      <h2>
        {/* showing {movies.length} of {totalResults || 0} results */}
      </h2>
      <Form>
      {/* <Form onSubmit={submitHandler}> */}
        {/* {error ? <Message red>A film title is required</Message> : null} */}
        <Input
          // disabled={inputDisabled}
          type="search"
          // value={input}
          // onChange={changeHandler}
        />
        <Button>Search</Button>
      </Form>


      
    </SearchRoot>

    // {/* {saved ? (
    //   <Message green>
    //     We've added {lastMovie} to your nominated list. You've got //4 left
    //   </Message>
    // ) : null} */}

    // {/* {currMovie.Title && (
    //   <Display>
    //     <MovieTitle>{currMovie.Title}</MovieTitle>
    //     <MovieCard>
    //       <Img src={currMovie.Poster} alt="movie poster" />
    //       <CardInfo>
    //         <p>
    //           <Span>Director:</Span> {currMovie.Director}
    //         </p>
    //         <p>
    //           <Span>Cast:</Span> {currMovie.Actors}
    //         </p>
    //         <p>
    //           <Span>Writer:</Span> {currMovie.Writer}
    //         </p>
    //         <p>
    //           <Span>Year:</Span> {currMovie.Year}
    //         </p>
    //         <Button disabled={disabled} onClick={nominateHandler}>
    //           {disabled
    //             ? "You've already nominated this movie"
    //             : "Nominate This Movie!"}
    //         </Button>
    //       </CardInfo>
    //     </MovieCard>
    //   </Display>
    // )} */}
  );
};

export default Search;
