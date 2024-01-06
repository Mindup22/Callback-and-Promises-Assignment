function greet(name) {
    return new Promise((resolve) => {
      const greeting = `Hello, ${name}!`;
      resolve(greeting);
    });
  }
  
  greet("Mindup").then((message) => console.log(message)); // "Hello, Mindup!"
  