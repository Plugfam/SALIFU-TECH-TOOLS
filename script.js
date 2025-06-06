// Menu button click event
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').style.display = document.querySelector('.menu').style.display === 'block' ? 'none' : 'block';
});

// About button click event
document.querySelector('#about-btn').addEventListener('click', () => {
    document.querySelector('#about-content').classList.remove('hidden');
    document.querySelector('.menu').style.display = 'none';
});

// Contact button click event
document.querySelector('#contact-btn').addEventListener('click',
