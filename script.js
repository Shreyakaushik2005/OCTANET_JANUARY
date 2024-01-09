document.addEventListener('DOMContentLoaded', function () {
    var discoverButton = document.querySelector('.content button');
    var additionalContent = document.querySelector('.additional-content');

    discoverButton.addEventListener('click', function () {
        // Toggle the visibility of the additional content section
        additionalContent.classList.toggle('visible');
    });
});
