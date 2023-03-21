import "./App.css";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getRandomWordAndLetters, shuffle } from "./utils/words";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [guess, setGuess] = useState("");
  const [word, setWord] = useState("");
  const [letters, setLetters] = useState([]);
  const [result, setResult] = useState("");
  const [rounds, setRounds] = useState(1);

  const letterHandler = (letter) => {
    setGuess(guess + letter);
  };

  const deleteHandler = () => {
    setGuess(guess.substring(0, guess.length - 1));
  };

  const shuffleHandler = () => {
    setLetters(shuffle(letters));
  };

  const submitHandler = () => {
    if (guess === word) {
      setResult(`Congrats, the correct word is ${word}!`);
      setRounds(rounds + 1);
    } else {
      setResult(`Try again ${guess} is not the correct word.`);
    }
    setGuess("");
  };

  useEffect(() => {
    const { word, letters } = getRandomWordAndLetters();
    setWord(word);
    setLetters(letters);
    console.log("WORD", word);
  }, [rounds]);

  return (
    <>
      <Typography>{guess}</Typography>
      <Typography>{result}</Typography>
      <Box displau="flex">
        {letters.map((letter) => (
          <Button
            onClick={guess.length < 8 ? () => letterHandler(letter) : undefined}
          >
            {letter}
          </Button>
        ))}
      </Box>
      {guess.length > 0 && <Button onClick={deleteHandler}>Delete</Button>}
      {guess.length === 8 && <Button onClick={submitHandler}>Submit</Button>}
      {<Button onClick={shuffleHandler}>Shuffle</Button>}
    </>
  );
};

export default Home;
