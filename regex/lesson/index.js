var nameOne = "jack";
var nameTwo = "JILL";
var word = "j1m";
var code = "5alive";

//checking if name two has a lowercase letter
if(nameTwo.match(/[a-z]/g)){
  console.log("matched")
} else {
  console.log("didnt match")
}

//checking if name one has a lowercase letter
if(nameOne.match(/[a-z]/g)){
  console.log("matched")
} else {
  console.log("didnt match")
}

//checking if a string contains a number from 5-9
if(word.match(/[5-9]/g)){
  console.log("matched")
} else {
  console.log("didnt match")
}

//checking if a string contains a number from 5-9
if(code.match(/[5-9]/g)){
  console.log("matched")
} else {
  console.log("didnt match")
}

//checking if string contains i
if(code.match(/(?=.*i)/g)){
  console.log("matched")
} else {
  console.log("didnt match")
}
