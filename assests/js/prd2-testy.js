document.addEventListener('DOMContentLoaded', function() {
    const zoomImages = document.querySelectorAll('.img-zoom');

    function handleScroll() {
        zoomImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

            if (rect.top <= viewHeight && rect.bottom >= 0) {
                const scrollPercentage = (viewHeight - rect.top) / (viewHeight + rect.height);
                const scale = 1 + Math.min(scrollPercentage * 0.2, 0.2);
                img.style.transform = `scale(${scale})`;
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    const imgDiv = document.querySelector('.img-div7');

    // Zoom in on hover
    imgDiv.addEventListener('mouseenter', function() {
        imgDiv.style.backgroundSize = '170%'; // Zoom in the background
        imgDiv.style.transition = 'background-size 0.5s ease-in-out'; // Smooth transition
    });

    // Reset zoom when hover ends
    imgDiv.addEventListener('mouseleave', function() {
        imgDiv.style.backgroundSize = '100%'; // Reset to original size
        imgDiv.style.transition = 'background-size 0.5s ease-in-out'; // Smooth transition
    });
}); 