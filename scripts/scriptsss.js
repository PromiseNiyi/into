function filterImages(category) {
    const images = document.querySelectorAll('.image-item');
    
    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function searchImages() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const images = document.querySelectorAll('.image-item');

    images.forEach(image => {
        const imageName = image.getAttribute('data-name').toLowerCase();
        if (imageName.includes(searchTerm)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
