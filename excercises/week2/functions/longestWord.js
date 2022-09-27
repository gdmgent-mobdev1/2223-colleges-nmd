const mySentence = "I like JavaScript";



const findLongestWord = (mySentence) =>{
  const words = mySentence.split(" ");
  let longestWord = "";
  for (let i = 1; i < words.length; i++) {
    
    if(words[i].length > words[i-1].length){
      longestWord = words[i];
    } 
    
}
return longestWord;
}

console.log(findLongestWord(mySentence));
