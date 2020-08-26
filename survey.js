const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (dinner, brunch,) ", (answer4) => {
        rl.question("What's your favourite to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, ", (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer1}\nfav activity: ${answer2}\nlistens to: ${answer3}\nfav meal: ${answer4}\nfav food: ${answer5}\nfav sport: ${answer6}\nsupower: ${answer7}\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});