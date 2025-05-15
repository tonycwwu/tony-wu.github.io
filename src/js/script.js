const outputElement = document.getElementById('output');
const cursorElement = document.getElementById('cursor');

const text = `tony ~ $ env | grep tony
NAME = tony Wu
EMAIL = tonytonywu31@gmail.com
GITHUB = tonycwwu
LINKED_IN = https://www.linkedin.com/in/tonycwwu

tony ~ $`;

const typingSpeed = 20; // Adjust this value to change the typing speed (in milliseconds)

let index = 0;

function type() {
  if (index < text.length) {
    const currentChar = text[index];
    if (currentChar === '\n') {
      outputElement.innerHTML += '<br>'; // Handle new lines
    } else {
      outputElement.innerHTML += currentChar;
    }
    index++;
    setTimeout(type, typingSpeed); // Use the adjustable typing speed here
  } else {
    cursorElement.style.display = 'none'; // Hide cursor after typing
    convertLinksToHyperlinks(); // Convert URLs to hyperlinks
  }
}

function convertLinksToHyperlinks() {
  const urlRegex = /(https?:\/\/[^\s<]+)/g; // Match URLs and ensure they don't include HTML tags or extra characters
  outputElement.innerHTML = outputElement.innerHTML.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank">${url}</a>`;
  });

  // Ensure email addresses are also converted to mailto links
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  outputElement.innerHTML = outputElement.innerHTML.replace(emailRegex, (email) => {
    return `<a href="mailto:${email}">${email}</a>`;
  });
}

type();