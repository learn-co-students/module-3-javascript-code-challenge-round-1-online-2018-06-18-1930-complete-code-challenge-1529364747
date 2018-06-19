window.addEventListener("load", getImage())

function getImage() {
  fetch('https://randopic.herokuapp.com/images/15')
  .then(function(response){
    return response.json()})
    .then(function(data){
      const comments = data.comments.map(comment => `<li> ${comment.content} </li>`)
      document.getElementById("image").src = data.url
      document.getElementById("name").innerHTML = data.name
      document.getElementById("likes").innerHTML = data.like_count
      document.getElementById("comments").innerHTML = comments
  })
}

document.getElementById('like_button').addEventListener("click", increaseLikes);

function increaseLikes(e) {
  e.preventDefault();
  let likes = document.getElementById("likes").innerHTML
  let newLikes = parseInt(likes) + 1
  document.getElementById('likes').innerHTML = newLikes
  // appending number, previously string
  persistLikes();
}

// come back to this. Image_id is null in repsonse
function persistLikes() {
  const url = 'https://randopic.herokuapp.com/likes'
  const data = { image_id: 15 }
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(res => res.json())
  .catch(error => console.log("Error:", error))
  .then(res => console.log("Likes updated"))
}
