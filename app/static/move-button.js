const button = document.getElementById('movable-button');

button.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth/3;
    const y = Math.random() * window.innerHeight/3;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});