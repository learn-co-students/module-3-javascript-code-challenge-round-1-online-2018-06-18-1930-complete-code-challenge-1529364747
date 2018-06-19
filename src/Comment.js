// class Comment {
//
// }

document.getElementById('comment_form').addEventListener("submit", addComment);

function addComment(e) {
  e.preventDefault();
  const newComment = document.getElementById('comment_input').value
  let newLI = document.createElement("LI")
  document.getElementById('comments')
  // append new comment <li>${newComment}</li>
  persistComment();
}
