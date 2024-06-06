const ucFirst = function (text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Merci de mettre une string valable";
  }

  let newText = "";

  for (const i in text) {
    // if i is 0, we capitalize the first letter
    if (i == 0) {
      // capitalize the first letter
      newText += text[i].toUpperCase();
      // if i is not 0, we keep the same letter
    } else {
      // keep the same letter
      newText += text[i];
    }
  }
  // return the new text
  return newText;
};
// console.log(ucFirst("hello world"));

const capitalize = function (text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Merci de mettre une string valable";
  }

  let newText = "";
  let words = text.split(" ");
  for (const i in words) {
    // if i is 0, we capitalize the first letter
    if (i == 0) {
      // capitalize the first letter
      newText += words[i].charAt(0).toUpperCase() + words[i].slice(1);
      // if i is not 0, we keep the same letter
    } else {
      // keep the same letter
      newText += " " + words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  // return the new text
  return newText;
};
// console.log(capitalize("hello world"));

const camelCase = function (text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Merci de mettre une string valable";
  }
  let newText = "";
  let words = text.split(" ");
  for (const i in words) {
    // if i is 0, we keep the first word
    if (i == 0) {
      // keep the first word
      newText += words[i];
      // if i is not 0, we capitalize the first letter of the word
    } else {
      // capitalize the first letter of the word
      newText += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  // return the new text
  return newText;
};
// console.log(camelCase("hello world"));

const snake_case = function (text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Merci de mettre une string valable";
  }

  let newText = "";
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (i == words.length - 1) {
      newText += words[i].toLowerCase();
    } else {
      newText += words[i].toLowerCase() + "_";
    }
  }
  return newText;
};
console.log(snake_case("hello world"));

const leet = function (text) {
  let newText = "";
  for (const i in text) {
    switch (text[i].toLowerCase()) {
      case "a":
        newText += "4";
        break;
      case "e":
        newText += "3";
        break;
      case "i":
        newText += "1";
        break;
      case "o":
        newText += "0";
        break;
      case "u":
        newText += "(_)";
        break;
      case "y":
        newText += "7";
        break;
      default:
        newText += text[i];
    }
  }
  return newText;
};
console.log(leet("anaconda"));

const findLongestWord = function (text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Merci de mettre une string valable";
  }

  let words = text.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur"));
