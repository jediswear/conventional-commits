function feature1 () {
  console.log("feature 1");
}

(() => {
  feature1();
})();
