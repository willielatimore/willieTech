// alert('Welcome to WilliTech');


document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.getElementById("getStartedBtn");

    getStartedBtn.addEventListener("click", function () {
        document.getElementById("introduction-section").scrollIntoView({
            behavior: "smooth"
        });
    });
});



    // Image Hover Effects in the Portfolio Section
    const portfolioImages = document.querySelectorAll('.my-portfolio-item img');
    portfolioImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Contact Form Submission Handler
    const subscribeForm = document.querySelector('.footer-section form');
    subscribeForm.addEventListener('submit', event => {
        event.preventDefault();
        const emailInput = subscribeForm.querySelector('input[type="email"]').value;
        if (emailInput) {
            alert(`Thank you for subscribing with ${emailInput}!`);
            subscribeForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Fade-In Effect for Sections on Scroll
    const faders = document.querySelectorAll('.thankyou-section, .introduction-section, .my-portfolio-section, .about-me-section');
    const fadeOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    const fadeOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, fadeOptions);
    faders.forEach(fader => fadeOnScroll.observe(fader));


// Show the button when scrolled down 100px
window.onscroll = function () {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
