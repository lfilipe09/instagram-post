const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
  addComment(ev);
});

function getComments(){
  let comments = localStorage.getItem('comments')
  let commentConverted = document.createElement('div')
  commentConverted.innerHTML =  comments
  document.getElementById('allComments').appendChild(commentConverted)
}

function setOnLocalStorage() {
  localStorage.setItem('comments', document.getElementById('allComments').innerHTML);
}

function addComment(ev) {
  let commentText, wrapDiv;
  const textBox = document.createElement('div');
  wrapDiv = document.createElement('div');
  wrapDiv.className = 'wrapper';
  wrapDiv.style.marginLeft = 0;
  commentText = document.getElementById('newComment').value;
  document.getElementById('newComment').value = '';
  textBox.innerHTML = commentText;
  wrapDiv.append(textBox);
  commentContainer.appendChild(wrapDiv);
  setOnLocalStorage()
}

getComments()
