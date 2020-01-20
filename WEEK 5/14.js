function changeVocals(str) {
  var display = "";
  loop: for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        display += "b";
        continue loop;
      case "i":
        display += "j";
        continue loop;
      case "u":
        display += "v";
        continue loop;
      case "e":
        display += "f";
        continue loop;
      case "o":
        display += "p";
        continue loop;
      case "A":
        display += "B";
        continue loop;
      case "I":
        display += "J";
        continue loop;
      case "U":
        display += "V";
        continue loop;
      case "E":
        display += "F";
        continue loop;
      case "O":
        display += "P";
        continue loop;
    }
    display += str[i];
  }
  return display;
}
function reverseWord(str) {
  var display = "";
  for (i = str.length - 1; i >= 0; i--) {
    display += str[i];
  }
  return display;
}
function setLowerUpperCase(str) {
  var display = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      display += str[i].toLowerCase();
    } else {
      display += str[i].toUpperCase();
    }
  }
  return display;
}
function removeSpaces(str) {
  var display = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      i++;
    }
    display += str[i];
  }
  return display;
}

function passwordGenerator(name) {
  var change = changeVocals(name);
  var reverse = reverseWord(change);
  var capslock = setLowerUpperCase(reverse);
  var space = removeSpaces(capslock);
  // OUTPUT
  if (name.length < 5) {
    return `Minimal karakter yang diinputkan adalah 5 karakter`;
  } else {
    return space;
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
