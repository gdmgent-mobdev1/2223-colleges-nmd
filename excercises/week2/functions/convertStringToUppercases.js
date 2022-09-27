const mySentence = "I am who I am";

const capitalizeSentence = (mySentence) =>{
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
return words.join(" ");
}

console.log(capitalizeSentence(mySentence));