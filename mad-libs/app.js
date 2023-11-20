console.log("mad libs");

// Created a object for the mad libs game
let words = {
  number: "",
  adjective: "",
  plurNoun: "",
  adverb: "",
  anotherAdj: "",
};

// declare a variable for user input
let userInput = "";

// define a function for the game start
function madLib() {
  for (let keys in words) {
    let userInput = prompt(`Give me a ${keys}!`);
    words[keys] = userInput;
  }
  storyBuild();
}
madLib();

// define a function that builds a story to the user using their inputs
function storyBuild() {
  alert(
    `Once upon a time a group of ${words.number} General Assembly graduates
  got together and made a startup called ${words.adjective} Technologies.
  Their goal was to create smart ${words.plurNoun}.
  They approached the challenge ${words.adverb}
  which ultimately lead them to ${words.anotherAdj} fame.`
  );
}
