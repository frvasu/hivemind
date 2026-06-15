document.addEventListener("DOMContentLoaded", function () {
    // Scroll Reveal Engine for New File
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target); // Ek baar chalne ke baad band ho jayega
            }
        });
    }, {
        threshold: 0.15 // Jab section 15% dikhega tab trigger hoga
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
