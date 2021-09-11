// async await helps chaining promises in a clean and better way
// to make a function async just put the keyword 'async' before the arrow function
// async function always return a promise
// we'll use await instead of the then keyword

const getTodos = async () => {
  // fetch("todos/luigi.json").then(() => {});
  // await stops from assigning the value to response until the promise has been resolved
  const response = await fetch("todos/luigis.json");

  // we have to check for the status because if there is a mistake in url it might show error in json file
  if (response.status != 200) {
    // when we throw an error the promise is rejected
    throw new Error("Cannot fetch the data");
  }
  const data = await response.json();

  return data;
};

// async function always returns a promise so test would be a promise and not the data
// const test = getTodos();
// console.log(test);

// Since async returns a promise we can use the "then" keyword to extract the value

console.log(1);
console.log(2);

getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected: ", err.message));

console.log(3);
console.log(4);
