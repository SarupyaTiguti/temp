function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

    if(menuBth.className === "nav-menu"){
        menuBth.className += "responsive";
    }
    else{
        menuBth.className = "nav-menu";
    }
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form-button');
    form.addEventListener('click', function (e) {
        e.preventDefault();
        
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const comments = document.querySelector('#comments').value.trim();
        const errorMessage = document.querySelector('#error-message');

        if (!name || !email || !comments) {
            errorMessage.textContent = 'All fields are required.';
            return;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        errorMessage.textContent = '';
        alert('Thank you for your message!');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});

var typingEffect = new Typed(".typedText",{
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typedSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})


const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", {delay: 200});
sr.reveal(".text-btn",{delay: 200});
sr.reveal(".social_icons",{delay: 200});
sr.reveal(".featured-image",{delay: 320});


sr.reveal(".project-box", {interval: 200});

sr.reveal(".top-header", {});


const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});