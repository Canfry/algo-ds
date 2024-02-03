// UNDERSTAND THE PROBLEM
// -------------------------------------
// Write a function that takes two numbers and return the sum of those numbers
// -------------------------------------

// 1. Can I restate the problem in my own words
// "implement addition"
// 2. What are the inputs that go into the problem
// "ints? floats? what about string for large numbers?"
// 3. What are the outouts that should come from the solution to the problem
// "ints? floats? what about string for large numbers?"
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (you may not be able to answer this question until you set about solving the problem. That's okay; It's still woth considering the question at this early stage.)
// "you can assume that inputs are only numbers"
// 5. How should I label the important pieces of data that are a part of the problem?
// "function name should be add, inputs should be num1 and num2, output should be sum"

// EXPLORE EXAMPLES
// -------------------------------------
// Write a function which takes in a string and returns counts of each character in the string
// -------------------------------------
//
// 1. Start with simple examples
// charCount('aaaa'); // {a:4}
// charCount('hello'); // {h:1, e:1, l:2, o:1}
// 2. Progress to more complex examples
// charCount('my phone Number is 12345'); // do we count spaces? numbers? special characters? case sensitive?
// 3. Explore examples with empty inputs
// charCount(''); // what should we return?
// 4. Explore examples with invalid inputs
// charCount(); // what should we return?

// BREAK IT DOWN
// charCount('hello');
// {h:1, e:1, l:2, o:1}
// 1. Explicitly write out the steps you need to take
// 2. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.
// 3. It also helps communicate your thoughts to other engineers on your team, which is a critical skill as a software engineer.
// 4. More deliberate practice of this skill will help you when you're interviewing for jobs.
// charCount('your phone number is 4637589');
// {a:0, b:0, c:0, d:1, e:1, f:0, g:1, h:1, i:2, j:0, k:0, l:0, m:1, n:2, o:2, p:1, q:0, r:2, s:1, t:0, u:0, v:0, w:0, x:0, y:1, z:0}

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
  // make object to return at end
  let result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add one to count
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0 && result[char]) {
        result[char]++;
      } else {
        // if the char is a number/letter AND not in the object, add it and set value to 1
        result[char] = 1;
      }
    }
  }
  // if char is something else (space, period, etc.) don't do anything
  // return object at end
  console.log(result);
  return result;
}

// charCount('Hi there my number is 48735647');

function characterCount(str) {
  let result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  console.log(result);
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

characterCount('Hi there!!!');
