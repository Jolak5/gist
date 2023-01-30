const greet = (message, name) => {
  console.log(`${message}, ${name}!`)
}

greet('Hello', 'John');
greet('Hola', 'Antonio');
greet('Ciao', 'Luigi')

.greetings {
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
}

.greetings.english {
  background-color: #000;
  color: #FFF;
}
.greetings.spanish {
  background-color: #FFF;
  color: #000;
}

This is DRY
