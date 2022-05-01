document.getElementById('heart-button').addEventListener('click', function (ev) {
  if (document.querySelector('.heart')){
    document.querySelector('.heart').classList.remove('heart')
    ev.target.classList.add('heart-pulse')
  }else{
    document.querySelector('.heart-pulse').classList.add('heart')
    document.querySelector('.heart-pulse').classList.remove('heart-pulse')
  }
});
