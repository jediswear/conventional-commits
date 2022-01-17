function feature1 () {
  console.log("feature 1");
}

function feature2 () {
  console.log("feature 2");
}

function feature3 () {
  console.log("feature 3");
}

function feature4 () {
  console.log("feature 4");
}

(() => {
  feature1();
  feature2();
  feature3();
  feature4();
})();
