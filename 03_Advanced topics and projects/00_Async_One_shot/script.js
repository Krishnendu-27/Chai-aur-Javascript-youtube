//  ASYNC JS
// Story of async js
// synce is main call stack
// asynce is callback quee
// 1. check if any synce task have or not if have then first need to complete it
// 2.after main stack empty then asynce task enter in main stack and show the result
// 3. asynce task do their job but it not give anything return when they seated on callbackqueee they give output only when they enter main stack
// 4.event loop repetevly check that the synce callstack is empty or not if empty then pass asynce task to call stack
// 5 whichever aynce task complet first it goes main stack first here sequence dont matter

// if we use (settimeout , setinterval , fetch APi , axois , promises ) all are aysuncronesss

// settimeout : its run the code after a fixed time
// setTimeout(another function , time) its ask 2 things, setTimeout is a function it self it need two things the function we want to run secoend time.
console.log("1");
console.log("2");
setTimeout(function () {
  console.log("3");
}, 2000);
console.log("4");
// output will be 1,2,4,3 because settimeout is asynce go to callabck quee

// setinterval: its run the code after certain of time agian mens a loop that call on a certain time
let i = 0;
let a = setInterval(function () {
  console.log(i);
  i++;
  if (i === 3) {
    clearInterval(a);
  }
}, 1000); // now it give 1 to counting endless time in every one sceond . it need same function and time

// for stop setInterval we need to hold setInterval in a variable then need to do
// clearInterval(variablename)
// clearInterval(a);

// we can use this in setinterval

// Fetch API: its give data from a url and took data from us send the url

// fetch go to internet and return the data its a long time consuming process if it syncronass then the next line need to wait till he get back with data but thanks for syncronass its fo the task in another callback and get the data when its get back with it its notify us

// fetch(`url `).then();

// then use when the data came

// example
// fetch(`https://randomuser.me/api/`).then(function (data) {
//     console.log("yay we get data");
//     console.log(data)
// });
fetch(`https://randomuser.me/api/`)
  .then((raw) => {
    return raw.json(); // now the next .then() gets the JSON
  })
  .then((readble) => {
    console.log(
      `random user full name is ${readble.results[0].name.first} ${readble.results[0].name.last}`
    );
  });

// we get the raw data , its not readable only computer can readte so for us its need to convert our readable format

// Axois: its do same as fetchapi just for developer friendly

// axois help us to write one less line mens when we call data via axois get done convertion raw to json its self

axios.get(`https://randomuser.me/api/`).then((val) => {
  console.log(val.data.results[0].email);
});

// usally need to write any method of reciving like get post

// Promise — the code you put inside will work. It will automatically run in the side stack, and once the internal code is resolved it will execute.

// What are promises?
// Think of some code in your mind, which is async code, meaning it will go into the side stack and run later after the main stack.
// Now imagine you wrote this code, but its answer might come later or maybe never come at all.
// So what are promises?
// Think of it like this — you write any async code inside a promise, and the promise gives you a slip (parchi).
// By default, this slip has "waiting" written on it.
// On this slip, there are mainly two events: one is called "then" and the other is called "catch".
// If your data comes successfully, then "resolved" will be written on the slip instead of "waiting", and the "then" will run.
// But if there’s an error in getting the data, then "rejected" will be written instead of "waiting", and the "catch" will run.

// promise syntax is
// new Promise(function (resolve, reject) {

// });

let slip = new Promise((resolve, reject) => {
  fetch(`https://randomuser.me/api/`)
    .then((raw) => {
      return raw.json();
    })
    .then((result) => {
      if (result.results[0].gender === "female") {
        resolve();
      } else {
        reject();
      }
    });
});

// if resolve() then work .then if reject then work .catch()

slip
  .then(function () {
    console.log("you are female ");
  })
  .catch(function () {
    console.log("you are male ");
  });

// Callabcks

// its a fucntion its special becuse it pass as argument when a perticular asynce code run
// example
function abcd(a, b) {
  console.log(`output is ${a + b()}`);
}
abcd(5, function () {
  return 5 + 6;
});

// take data from user when get the data
// print there name and email
function doTask(url, callback) {
  fetch(url)
    .then(function (raw) {
      return raw.json();
    })
    .then(function (result) {
      callback(result);
    });
}
doTask(`https://randomuser.me/api/`, function (res) {
  console.log(
    `you name is ${res.results[0].name.first} your email is ${res.results[0].email} and your gender i guess! ${res.results[0].gender}`
  );
});

// Aynce/ Await

// Async/Await – Create any function and write whatever async code you want inside it. Now, when you write async, the line after it executes first because async goes to the side stack, and if the later line depends on the async one, your code will fail. That’s why, because your code depends on the async code which will run after the sync code finishes.

// await neeed a conditon await parenet function need to write async

// example
async function abcde() {
  let data = await fetch(`https://randomuser.me/api/`);
  data = await data.json();
  // You're trying to log an object (data) using a template literal (${data}), which implicitly calls toString() on the object. For most objects, this results in the string: that why this not work ⬇️
  // console.log(`data is ${data}`);
  console.log(data);
}
abcde();
// with aynce await we can write asynce code that way its looks like syncronass

// Event Loop

// who chekc queess and main stack continuesly which he chcek that is main stack empty or not if yes then transfer quess to main stack one by one

// Callback vs promises vs asynce await

// get a data from url and show in log
// callback
function callabckexample(url, callabck) {
  fetch(url)
    .then(function (raw) {
      return raw.json();
    })
    .then(function (result) {
      callabck(result);
    });
}
callabckexample(`https://randomuser.me/api/`, function (d) {
  console.log(
    `full name is ${d.results[0].name.first} ${d.results[0].name.last} for callback`
  );
});

// promises

let promiseexample = new Promise(function (resolve, reject) {
  axios(`https://randomuser.me/api/`).then(function (res) {
    // here data is the format that axois send the data
    if (res.data.results[0].dob.age > 0) {
      resolve(res.data);
    } else {
      reject(res.data);
    }
  });
});

promiseexample
  .then(function (d) {
    console.log(
      `full name is ${d.results[0].name.first} ${d.results[0].name.last} for promises`
    );
  })
  .catch(function (e) {
    console.log("age is " + e.results[0].age);
  });

// asynce await
async function asyncexample() {
  let d = await fetch(`https://randomuser.me/api/`);
  d = await d.json();

  console.log(
    `full name is ${d.results[0].name.first} ${d.results[0].name.last} for async await`
  );
}
asyncexample();
// which is best 
/* 
// Callback vs promises vs asynce await

// get a data from url and show in log
// callback
function callabckexample(url, callabck) {
  fetch(url)
    .then(function (raw) {
      return raw.json();
    })
    .then(function (result) {
      callabck(result);
    });
}
callabckexample(`https://randomuser.me/api/`, function (d) {
  console.log(
    `full name is ${d.results[0].name.first} ${d.results[0].name.last} for callback`
  );
});

// promises

let promiseexample = new Promise(function (resolve, reject) {
  axios(`https://randomuser.me/api/`).then(function (res) {
    // here data is the format that axois send the data
    if (res.data.results[0].dob.age > 0) {
      resolve(res.data);
    } else {
      reject(res.data);
    }
  });
});

promiseexample
  .then(function (d) {
    console.log(
      `full name is ${d.results[0].name.first} ${d.results[0].name.last} for promises`
    );
  })
  .catch(function (e) {
    console.log("age is " + e.results[0].age);
  });

// asynce await
async function asyncexample() {
  let d = await fetch(`https://randomuser.me/api/`);
  d = await d.json();

  console.log(
    `full name is ${d.results[0].name.first} ${d.results[0].name.last} for async await`
  );
}
asyncexample();
*/

// genarators
// its give us to power to pause the flow of a code 

// error handeling in async
// web workores
// AJAX
