document.addEventListener('DOMContentLoaded', function() {
    const div = document.getElementById('myDiv');
    const originalColor = window.getComputedStyle(div).backgroundColor;
    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'blue'; 
    });
    div.addEventListener('mouseout', function() {
        div.style.backgroundColor = originalColor; 
    });
});
