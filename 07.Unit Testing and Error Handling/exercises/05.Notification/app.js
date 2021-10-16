function notify(message) {
  let notification = document.getElementById('notification');

  notification.textContent = message;
  notification.style.display = 'block';
  notification.addEventListener('click', onClick);

  function onClick(e) {
    notification.style.display = 'none';
  }
}