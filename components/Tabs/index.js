// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

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




function tabCreater(topic){
const topicDiv = document.createElement('div')
const tabsClass = document.querySelector('.topics')
topicDiv.classList.add('tab')
topicDiv.textContent = topic
clickTopic.addEventListener('click', (event) =>{
  // let z = event.target
let clickedTab = event.target.textContent
efe(clickedTab)
})
tabsClass.appendChild(topicDiv)
}

function topicsToDom(topics){
  topics.forEach(topic => {
    tabCreater(topic)
  })
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
let topics = response.data.topics
// console.log(topics);
 topicsToDom(topics);
})
.catch((error) =>{
console.log((error))
})
const clickTopic = document.querySelector('.topics')

function efe(clickedTab){
console.log(clickedTab)
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
let node = response.data.articles[clickedTab]
console.log(node)
console.log(clickedTab)
nodeToDom(node)
})
.catch((error) =>{
console.log((error))
})

}



// console.log(x.nodeName)
// console.log(x.value)
