const commentContainer = document.getElementById('all-comments');

const warningMessage = document.getElementById('warning-message');
warningMessage.children.length = ""

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
  getReply()
}

function setOnLocalStorage() {
  localStorage.setItem('comments', document.getElementById('all-comments').innerHTML);
}

function addComment(ev) {
  if(document.getElementById('new-comment').value){
    if(document.getElementById('new-comment').value.slice(0,1) !== '@'){
      if(warningMessage.children.length > 0){
        warningMessage.innerHTML = ""
      }
      let commentText, wrapDiv, wrapReplyDiv;
      let numberOfComments = document.getElementById('all-comments').innerHTML.toString().split('•').length
      const textBox = document.createElement('span');
      const replyButton = document.createElement('button');
      replyButton.className = 'reply';
      replyButton.innerHTML = 'Reply';
      let date = ((new Date().getMonth() + 1).toString().padStart(2, '0')) + "/" + (new Date().getDate().toString().padStart(2, '0')) + "/" + new Date().getFullYear().toString() + "  " + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      const dateHour = document.createElement('p');
      dateHour.innerHTML = date + " • ";
      dateHour.className = 'date';
      wrapDiv = document.createElement('div');
      wrapDiv.className = 'comment-wrapper';
      wrapDiv.id = `comment-${numberOfComments}`;
      wrapReplyDiv = document.createElement('div');
      wrapReplyDiv.className = 'reply-wrapper';
      wrapDiv.style.marginLeft = 0;
      commentText = `<b>Person ${numberOfComments}</b> ${document.getElementById('new-comment').value}`;
      document.getElementById('new-comment').value = '';
      textBox.innerHTML = commentText;
      wrapReplyDiv.append(dateHour, replyButton);
      wrapDiv.append(textBox, wrapReplyDiv);
      commentContainer.appendChild(wrapDiv);
      setOnLocalStorage()
      getReply()
    }else{
      addReply(document.getElementById('new-comment').value.slice(8,9), document.getElementById('new-comment').value.slice(10))
    }
  }else{
    if(warningMessage.children.length === 0){
      let warningText = 'The message cannot be empty!'
      const warningBox = document.createElement('p');
      warningBox.innerHTML = warningText;
      warningBox.style.color = 'var(--heart-red)';
      warningBox.style.textAlign = 'center'
      warningBox.style.fontSize = '9px'
      warningBox.style.marginTop = '10px'
      warningMessage.appendChild(warningBox)
    }
  }
}

function getReply() {
  let replyButtons = document.querySelectorAll('.reply')
  replyButtons.forEach((replyButton) =>
  replyButton.addEventListener('click', function (ev) {
    addReplyInput(ev);
  })
  )
}

function addReplyInput(ev){
  document.getElementById('new-comment').value = `@${ev.target.parentElement.parentNode.firstChild.outerText.slice(0,8)} `
}

function addReply(personNumber, personMessage){
  const replyPerson = document.getElementById(`comment-${personNumber}`);
  if(replyPerson && personMessage){
    if(warningMessage.children.length > 0){
      warningMessage.innerHTML = ""
    }
    let commentText, wrapDiv, wrapImageText;
    let date = ((new Date().getMonth() + 1).toString().padStart(2, '0')) + "/" + (new Date().getDate().toString().padStart(2, '0')) + "/" + new Date().getFullYear().toString() + "  " + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    commentText = personMessage;
    const textBox = document.createElement('span');
    textBox.innerHTML = commentText;
    const dateHour = document.createElement('p');
    dateHour.innerHTML = date;
    dateHour.className = 'date';
    const arrowImage = document.createElement('img')
    arrowImage.src = 'images/arrow.svg';
    arrowImage.style.width = '14px';
    arrowImage.style.marginRight = '3px';
    arrowImage.style.marginTop = '3px';
    wrapDiv = document.createElement('div');
    wrapDiv.style.marginBottom = '0px';
    wrapDiv.style.marginTop = '3px';
    wrapDiv.className = 'comment-wrapper';
    wrapImageText = document.createElement('div');
    wrapImageText.style.display = 'flex';
    wrapImageText.style.alignItems = 'flex-start';
    wrapReplyDiv = document.createElement('div');
    wrapReplyDiv.style.marginLeft = '15px';
    wrapReplyDiv.className = 'reply-wrapper';
    document.getElementById('new-comment').value = '';
    wrapImageText.append(arrowImage, textBox);
    wrapReplyDiv.append(dateHour);
    wrapDiv.append(wrapImageText, wrapReplyDiv);
    replyPerson.appendChild(wrapDiv);
    setOnLocalStorage()
  }else if(!replyPerson){
    if(warningMessage.children.length === 0){
      let warningText = "I didn't find this person :( confirm that the username is spelled correctly or delete the '@' for a new comment."
      const warningBox = document.createElement('p');
      warningBox.innerHTML = warningText;
      warningBox.style.color = 'var(--heart-red)';
      warningBox.style.textAlign = 'center'
      warningBox.style.fontSize = '9px'
      warningBox.style.marginTop = '10px'
      warningMessage.appendChild(warningBox)
    }
  }else{
    if(warningMessage.children.length === 0){
      let warningText = 'The message cannot be empty!'
      const warningBox = document.createElement('p');
      warningBox.innerHTML = warningText;
      warningBox.style.color = 'var(--heart-red)';
      warningBox.style.textAlign = 'center'
      warningBox.style.fontSize = '9px'
      warningBox.style.marginTop = '10px'
      warningMessage.appendChild(warningBox)
    }
  }
}

getComments()
