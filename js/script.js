const url = 'https://api.quotable.io/random';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let quote = document.getElementById('quote');
    let author = document.getElementById('author ');
    quote.textContent = data.content;
    author.textContent = data.author;
    console.log(data.content);
    console.log(data.author);
  });
