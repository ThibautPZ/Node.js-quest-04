require("dotenv").config();

const prefix = process.env;

console.log(
  `I am ${prefix.MY_NAME}, wilder in ${prefix.MY_CITY}, and I love ${prefix.MY_LANGUAGE} !`
);

/* `nonsense = {name: 'Waldo', city: 'the wilderness', language: 'JAVA '}` is creating an object with
three properties: `name`, `city`, and `language`. The values of these properties are `'Waldo'`,
`'the wilderness'`, and `'JAVA'` respectively. However, this object is not used anywhere in the code
and does not have any impact on the output of the program. <= Il est marrant ce message qui s'écrit quand on tape ctrl + dot */
nonsense = { name: "Waldo", city: "the wilderness", language: "JAVA ☕" };

console.log(
  /* Logging a string to the console that includes the values of the `name`, `city`, and `language`
  properties of the `nonsense` object. The values are inserted into the string using template
  literals and the `${}` syntax. <= Vraiment marrante cette auto doc */
  `I am ${nonsense.name}, wilder in ${nonsense.city}, and I love ${nonsense.language} !`
);
