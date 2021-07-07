// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles



function componentCreater(article){
  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgContainerDiv = document.createElement('div')
  const spanTag = document.createElement('span')

  const img = document.createElement('img')
  const cardContainer = document.querySelector('.cards-container')

  img.setAttribute('src', article.authorPhoto)

  cardDiv.classList.add('card')
  headlineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imgContainerDiv.classList.add('img-container')

  headlineDiv.textContent = article.headline;
  spanTag.textContent = `By ${article.authorName}`;
authorDiv.appendChild(imgContainerDiv)
  authorDiv.appendChild(spanTag)
  imgContainerDiv.appendChild(img)
  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  cardContainer.appendChild(cardDiv)
  }

function nodeToDom(node){
  node.forEach(article => {
    componentCreater(article)
  })
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
let node = response.data.articles.node
console.log(response)
 console.log(nodeToDom(node))
 nodeToDom(node[0])
 console.log(node)
})
.catch((error) =>{
console.log((error))
})

// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
