let noButtonClickCount = 0;

document.getElementById('noButton').addEventListener('click', function(event) {
    noButtonClickCount++;
    if (noButtonClickCount === 5) {
        this.textContent = "It's going to be hard to say no because Fink is literally the best valentine in the world";
    }
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.left = x + 'px';
    this.style.top = y + 'px';
    this.style.position = 'fixed';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('yesButton').style.display = 'none';
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


