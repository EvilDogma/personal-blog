const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

function renderPost(title) {
    // Use JSON.parse() to convert text to JavaScript object
    const post = JSON.parse(localStorage.getItem(title));
    // Check if data is returned, if not exit out of the function
    if (post !== null) {
      document.getElementById('username').innerHTML = post.username;
      document.getElementById('title').innerHTML = post.title;
      document.getElementById('content').innerHTML = post.content;
    }
  }

submitButton.addEventListener('click', function (event) {
   // localStorage.clear()
    event.preventDefault();
    console.log(!(username.value))
    while(!(username.value)){
      username.value = prompt('please enter a username')
    
    }
    while(!(title.value)){
      title.value = prompt('please enter a title')
      
    }
    while(!(content.value.trim())){
      content.value = prompt('please enter some content')
      
    }
    console.log (localStorage)
    var oldPosts = JSON.parse(localStorage.getItem('posts'))||[]
    console.log(oldPosts)
    const blogPost = {
      username: username.value,
      title: title.value,
      content: content.value.trim(),
    };
 
    
    oldPosts.push(blogPost)
    console.log (oldPosts)
    localStorage.setItem('posts', JSON.stringify(oldPosts));

    // const post = JSON.parse(localStorage.getItem(title));
    // console.log (post)
    console.log (localStorage)
    // renderPost(title);


window.location.href = './blog.html'
})