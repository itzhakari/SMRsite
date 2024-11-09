document.addEventListener('DOMContentLoaded', () => {
    const barButton = document.querySelector('.barbtn');
    const crossButton = document.querySelector('.crossbtn');
    const barContent = document.querySelector('.bar-content');  // If you have a container to hide, use this

    // When the bar button is clicked, go to bar.html
    if (barButton) {
        barButton.addEventListener('click', () => {
            window.location.href = 'bar.html';  // Navigate to bar.html
        });
    }

    // When the cross button is clicked, simply go back to the previous page
    if (crossButton) {
        crossButton.addEventListener('click', () => {
            window.history.back();  // Goes back to the previous page in browser history
        });
    }
});









  