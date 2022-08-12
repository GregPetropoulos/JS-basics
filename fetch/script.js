//* FETCH API
//* NOTES
// The fetch api does return a promise on it's own
//Promises have 3 states
// Pending
// Fulfilled
// Rejected

// promise1
const myPromise = new Promise((resolve, reject) => {
  const errorMyPromise = false;
  if (!errorMyPromise) {
    resolve('yes! resolved promise');
  } else {
    reject('No!, rejected the promise');
  }
});
console.log(myPromise); // returns state of promise

// promise2 with 3s delay
const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('My next promise resolved');
  }, 3000);
});

// Demo pending state because the response is not a returned JSON in the body
const users = fetch('https://jsonplaceholder.typicode.com/users');
console.log('pending demo----->', users);
myNextPromise.then((value) => {
  console.log(value);
});

// Demo fulfilled state because the response is a returned JSON in the body with .then
const usersJson = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log('user in foreach loop to work with data', user);
    });
    console.log('data from userJson .then--->', data);
    console.log('fulfilled demo----->', usersJson);
  });

//.then to return the promise value
myNextPromise.then((value) => {
  console.log(value);
  return value;
});

myPromise.then((value) => {
  console.log(value);
  return value;
});

// * BASIC Async/Await Try/Catch Fetch call
// *GET
const asyncGetCall = async () => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
      // Accept:'text/plain'
    }
  };
  try {
    const response = await fetch('https://myfakeapi.com/api/cars/', options);
    // const response = await fetch('https://icanhazdadjoke.com/',options);

    const data = await response.json();
    // const data = await response.text()

    // enter you logic when the fetch is successful
    console.log('This is Async/Await with try/catch basic GET', data);
    return data;
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error);
  }
};
asyncGetCall();

// * BASIC Async/Await Try/Catch Fetch call
// *POST send a joke data the jokeObject
const jokeObject = {
  id: '0oO71TSv4Ed',
  joke: 'Why was it called the dark angel? Because of all the knights'
};
const asyncPostCall = async (jokeObject) => {
  const options = {
    method: 'POST',
    headers: {
      //   This is how we are sending the data, in json
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jokeObject)
  };
  try {
    const response = await fetch('https://httpbin.org/post', options);
    // const response = await fetch('https://icanhazdadjoke.com/',options);
    const data = await response.json();

    // enter you logic when the fetch is successful
    console.log('This is Async/Await with try/catch POST send a joke', data);
    return data;
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error);
  }
};
asyncPostCall(jokeObject);

// * BASIC Async/Await Try/Catch Fetch call
// *GET - Request a joke by first, last name, and categorie
// Need to Abstract into functions
// Maybe input data came from form
//INPUT DATA RETURNED AS OBJECT TO GET PASSED TO THE BUILD REQUEST
const getDataFromForm = () => {
  const requestObj = {
    firstName: 'Bruce',
    lastName: 'Lee',
    categories: ['nerdy']
  };
  return requestObj;
};

// TO CLEAN UP URL AND TAKE VALUES FROM SUBMITTED FORM, PASSED TO FETCH
const buildRequestUrl = (requestData) => {
  //destructure requestData
  const { firstName, lastName, categories } = requestData;

  return `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=${categories}`;
};

//ASYNC FUNCTION MAKING THE POST FETCH CALL AND RETURNING A JSON
const asyncGetRequestJokeByNameCall = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const dataJoke = data.value.joke;

    // enter you logic when the fetch is successful
    console.log(
      'This is Async/Await with try/catch Request joke by names--data.value',
      dataJoke
    );
    return dataJoke;
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)
    console.log(error);
  }
};

// ASYNC PROCEDURAL FUNCTION "Workflow"  TIES ALL FUNCTIONS TOGETHER
const processSubmitRequest = async () => {
  // inputs
  const requestData = getDataFromForm();

  //   input object passed to the url builder
  const requestUrl = buildRequestUrl(requestData);

  //   url and it's constiuents passed to the async call
  await asyncGetRequestJokeByNameCall(requestUrl);
  console.log('finished');
};
processSubmitRequest();

// 1 Fetch a text file

// 2 Fetch from a JSON

// 3 Fetch from API Data
