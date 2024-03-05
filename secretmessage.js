let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last string
secretMessage.pop();

// Log the updated length
console.log(secretMessage.length);

// Add the words 'to' and 'Program' to the end
secretMessage.push('to', 'Program');

// Change 'easily' to 'right'
const easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';

// Remove the first string
secretMessage.shift();

// Add 'Programming' to the beginning
secretMessage.unshift('Programming');

// Remove and replace specified strings
const indicesToRemove = [6, 7, 8, 9, 10];
secretMessage.splice(indicesToRemove[0], indicesToRemove.length, 'know,');

// Log the secret message as a sentence
console.log(secretMessage.join(' '));
