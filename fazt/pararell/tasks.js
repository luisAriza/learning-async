const util = require("util");
const sleep = util.promisify(setTimeout);

module.exports = {
  async taskOne() {
    try {
      // throw new Error("First task problem");
      await sleep(3000);
      return "One Value";
    } catch (e) {
      console.log(e);
    }
  },
  async taskTwo() {
    try {
      throw new Error("Second task problem");
      await sleep(2000);
      return "Two Value";
    } catch (e) {
      console.log(e);
    }
  },
};
