document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on scroll
    const sections = document.querySelectorAll(".fade-in");

    const checkVisibility = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.style.opacity = 1;
            }
        });
    };

    // Check visibility on scroll
    window.addEventListener("scroll", checkVisibility);

    // Initial visibility check
    checkVisibility();
});
