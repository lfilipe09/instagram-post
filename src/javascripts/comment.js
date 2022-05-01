const commentContainer = document.getElementById('all-comments');
document.getElementById('add-comments').addEventListener('click', function (ev) {
  addComment(ev);
});

document.getElementById('comment-icon').addEventListener('click', function (ev) {
  document.querySelector('#new-comment').focus()
});

function getComments(){
  let comments = localStorage.getItem('comments')
  let commentConverted = document.createElement('div')
  commentConverted.innerHTML =  comments
  document.getElementById('all-comments').appendChild(commentConverted)
}

function setOnLocalStorage() {
  localStorage.setItem('comments', document.getElementById('all-comments').innerHTML);
}

function addComment() {
  if(document.getElementById('new-comment').value){
    let commentText, wrapDiv;
    const textBox = document.createElement('span');
    wrapDiv = document.createElement('div');
    wrapDiv.className = 'comment-wrapper';
    wrapDiv.style.marginLeft = 0;
    commentText = `<b>Comment</b> ${document.getElementById('new-comment').value}`;
    document.getElementById('new-comment').value = '';
    textBox.innerHTML = commentText;
    wrapDiv.append(textBox);
    commentContainer.appendChild(wrapDiv);
    setOnLocalStorage()
  }
}

getComments()
