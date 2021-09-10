// fetch api
// this returns a promise
// in fetch api, the call is rejected only when there is a network error
// mixing the uri does not produce error but gives status 404 - "errpr"
fetch("todos/luigi.json")
  .then((response) => {
    console.log("resolved", response);
    // this returns a promise so it takes time to do therefore assigning it to a variable and printing
    // isnt a good idea
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });
