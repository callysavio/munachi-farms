document.addEventListener("DOMContentLoaded", () => {
    console.log('hello');
    // Enable animation when heading comes into view
    console.log('IntersectionObserver initialized');

    const headings = document.querySelectorAll(".headings");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-heading");
                    observer.unobserve(entry.target); // Optional: Stop observing once animated
                }
            });
        },
        {
            root: null, // Observe the viewport
            rootMargin: "0px", // Trigger animation when the element enters the viewport
            threshold: 0.1, // Trigger when 10% of the element is visible
        }
    );

    headings.forEach((heading) => observer.observe(heading));


    // Enable swipe functionality for carousels
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((carousel) => {
        const inner = carousel.querySelector(".carousel-inner");
        let startX;
-
        inner.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            console.log("Touch start:", startX);
        });

        inner.addEventListener("touchmove", (e) => {
            console.log("Touch move:", e.touches[0].clientX);
            if (!startX) return;
            const diff = e.touches[0].clientX - startX;
            if (diff > 50) {
                // Swipe right
                bootstrap.Carousel.getInstance(carousel).prev();
                startX = null;
            } else if (diff < -50) {
                // Swipe left
                bootstrap.Carousel.getInstance(carousel).next();
                startX = null;
            }
        });
    });
});