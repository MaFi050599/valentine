document.getElementById('noButton').addEventListener('click', function(event) {
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.left = x + 'px';
    this.style.top = y + 'px';
    this.style.position = 'fixed';
});

document.getElementById('yesButton').addEventListener('click', function() {
    // Display the celebration message
    const celebration = document.createElement('div');
    celebration.id = 'celebration';
    celebration.textContent = 'Yay! see you on the 14th';
    document.body.appendChild(celebration);
    celebration.style.display = 'block';

    // Create and animate hearts
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.backgroundColor = getRandomColor();
        document.body.appendChild(heart);
    }
});


