const shareOption = document.querySelector('.share-option');

document.querySelector('.share-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  shareOption.classList.toggle('active');
});
