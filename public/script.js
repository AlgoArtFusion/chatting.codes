document.getElementById('send-button').addEventListener('click', function() {
    const message = document.getElementById('message-input').value;
    if (message) {
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += `<div>${message}</div>`;
        document.getElementById('message-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
