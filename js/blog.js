const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');


function getAllPosts(){

}
function renderPost(post) {
    // Use JSON.parse() to convert text to JavaScript object
    //const post = JSON.parse(localStorage.getItem(title));
    // Check if data is returned, if not exit out of the function
    if (post !== null) {
      const entry = document.createElement("div");
      const title  = document.createElement("h2");
      title.appendChild(document.createTextNode(post.title));
      const content = document.createElement("div");
      content.appendChild(document.createTextNode(post.content));
      const username = document.createElement("div");
      username.appendChild(document.createTextNode(post.username));
      
      entry.appendChild(title).classList.add("title");
      entry.appendChild(content).classList.add("content");
      entry.appendChild(username).classList.add("author");
      document.getElementById("blog").appendChild(entry).classList.add("post");
    }
  }
window.onload = (event) => {
console.log(localStorage.length)
console.log(localStorage)
event.preventDefault();
var posts = JSON.parse(localStorage.getItem('posts'))||[]
console.log(posts[0])
// renderPost(posts[0])
for (let i = 0; i < posts.length; i++) {
  renderPost(posts[i])
  console.log[i]
}
console.log(posts)
console.log(posts.length)
 }
 backButton.addEventListener('click', function (event) {
  window.location.href = './index.html'
 })
