function feature1 () {
  console.log("feature 1");
}

function feature2 () {
  console.log("feature 1");
}

(() => {
  feature1();
  feature2();
})();
