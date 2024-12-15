document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.style.marginTop = '20px';
    document.querySelector('header').appendChild(darkModeButton);

    darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme); // Save preference
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Explore Menu Button Scroll
    const exploreButton = document.getElementById('explore-menu');
    exploreButton.addEventListener('click', () => {
        document.querySelector('.specials').scrollIntoView({ behavior: 'smooth' });
    });

    // Dynamic Welcome Message
    const userName = localStorage.getItem('userName') || prompt('What is your name?');
    if (!localStorage.getItem('userName')) {
        localStorage.setItem('userName', userName);
    }
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = `Welcome back, ${userName}! Enjoy your meal.`;
    welcomeMessage.style.fontSize = '1.2rem';
    welcomeMessage.style.color = '#4CAF50';
    document.querySelector('.hero-content').appendChild(welcomeMessage);
});
