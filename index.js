let data_;
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data_ = data
    displayquotes(data);
  });
const quote = document.querySelector('.quotes');
const author = document.querySelector('.teller');

function displayquotes(data){
  const keys = Object.values(data);
 	$quote = keys[Math.floor(Math.random() * keys.length)];
  quote.innerText = `"${$quote.text}"`;
  if($quote.author != "null"){
  author.innerText = `- ${$quote.author}`
  }
}

const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    displayquotes(data_)
})

