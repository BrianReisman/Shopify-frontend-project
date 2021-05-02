import { useState } from "react";

import Root, { BackgroundImg, Title } from "./App.elements";

// import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
// import Nomination from "./components/Nomination/Nomination";
function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  console.log("currentMovies", currentMovies);

  return (
    <Root>
      <BackgroundImg>
        <Title>The Shoppies</Title>
        <Search/>






        
        {/* <Home />
      <Search setSavedMovies={setSavedMovies} savedMovies={savedMovies} />
      <Nomination setSavedMovies={setSavedMovies} savedMovies={savedMovies} /> */}
        {/* <Footer /> */}
      </BackgroundImg>
    </Root>
  );
}

export default App;
