// JavaScript
document.getElementById('copy-button').addEventListener('click', function () {
    const code = document.getElementById('code');
    const textArea = document.createElement('textarea');
    textArea.value = code.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  });
  
  document.getElementById('save-button').addEventListener('click', function () {
    const code = document.getElementById('code').textContent;
    // You can implement code saving functionality here.
    // For simplicity, we're just logging the code to the console.
    console.log('Code Saved: ', code);
  });
  
  const lockButton = document.getElementById('lock-button');
  const codeContainer = document.querySelector('.code-container');
  lockButton.addEventListener('click', function () {
    codeContainer.classList.toggle('locked');
    lockButton.textContent = codeContainer.classList.contains('locked') ? 'Unlock' : 'Lock';
  });
  