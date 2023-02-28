import { words } from "../constants/words";

export const getRandomWordAndLetters = () => {
  const word = words[Math.floor(Math.random() * words.length)].toLowerCase();
  const lettersObj = {};

  word.split("").forEach((letter) => {
    if (lettersObj[letter]) {
      lettersObj[letter] = lettersObj[letter] + 1;
    } else {
      lettersObj[letter] = 1;
    }
  });

  return { word, letters: shuffle(Object.keys(lettersObj)) };
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
