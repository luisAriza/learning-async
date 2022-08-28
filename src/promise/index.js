// const promise = new Promise(function (resolve, reject) {
//   resolve("Resuelto");
// });

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  cows > 10
    ? resolve("Yeah, we have enough cows")
    : reject("There's not enough cows");
});

countCows
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finally promise"));
