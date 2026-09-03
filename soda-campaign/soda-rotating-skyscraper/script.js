document.querySelector('.creative').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.currentTarget.classList.add('is-activated');
    }
});