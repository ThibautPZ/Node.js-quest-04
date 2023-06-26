require("dotenv").config();

const prefix = process.env;

console.log(
  `I am ${prefix.MY_NAME}, wilder in ${prefix.MY_CITY}, and I love ${prefix.MY_LANGUAGE}`
);
