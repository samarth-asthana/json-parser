const Big = require("big.js");

function parseJSON(jsonString) {
  return JSON.parse(jsonString, (key, value) => {
    if (typeof value === "string") {
      try {
        const num = new Big(value);
        if (num.toString() === value) {
          return num;
        }
      } catch (e) {
        return value;
      }
    }
    return value;
  });
}

module.exports = parseJSON;
