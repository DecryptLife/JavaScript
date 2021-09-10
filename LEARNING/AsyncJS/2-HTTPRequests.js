// we make http requests to get data from another server
// we make these requests to API endpoints

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // setting up the request
    // first parameter is the type of request we want to make
    // like - get, post, put etc
    // second parameter is the end-point
    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

    // to send the request
    // request.send();

    // to track the request we can use event listeners readystatechange and
    // is fired when there is a state change

    request.addEventListener("readystatechange", () => {
      // here the request will give some state values
      // each has a particular meaning refer: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
      // 4 means the data has been downloaded
      // status holds values ranging from 100-500 and they have various meanings, refer msdn website for detailed information
      if (request.readyState == 4 && request.status === 200) {
        // some errors could occur and still the state might reach 4 so this isn't the right way
        // if there is an error then status would be 404 and the responseText would be {}
        // so chceck for status as well error:404
        // JSON.parse(json_text) converts the json to javascript objects
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET", resource);
    request.send();
  });
};

// creating request object

console.log(1);
console.log(2);
// this makes the code reusable and getTodos function could be modified each time
// getTodos("todos/luigi.json", (err, data) => {
//   console.log("Callback fired");
//   // console.log(err, data);
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// callback-hell
// here we can see that the code has started to look bad and if more files were there then it would be hard to maintain
// getTodos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/shaun.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// the solution to prevent the above callback hell is to use promises
// promises allows to use the code one after the other

console.log(3);
console.log(4);

// Promise
// const getSomething = () => {
//   // Promise has two types of return value (Either a reject or a resolve)
//   return new Promise((resolve, reject) => {
//     //fetch something
//     // resolve("some data");
//     // if any error
//     reject("some error");
//   });
// };

// Less neat
// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// ***** Better way *****
// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// comes in handy when we have to chain promises
// once data is recieved we fire another promise when we use return
getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved: ", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved: ", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved: ", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });
