const addItem = (word, callback) => {
  callback();
}

addItem("word", () => console.log('hello world'));