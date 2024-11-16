function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
    }

}

/************* Dark Mode ******************/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/************** typing effect *******************/
var typingEffect = new Typed(".typed-text", {
    strings: ["Software Developer.", "Mobile developer", "Web developer", "Power Platform developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})


/************** Scroll animation *******************/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/************ Active links**************/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.
                querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

function downloadPDF() {
        window.location.href = 'C:/Users/USER/Downloads/Mduduzi%20Sithole.pdf';  // Opens PDF in a new tab
        // Or use this for download:
        // window.location.href = 'path/to/your-file.pdf';  // Automatically triggers a download
    }

    document.getElementById('sendButton').addEventListener('click', function() {
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Check if all fields are filled
        if (name && email && subject && message) {
            // Here you would typically send the form data to a server via an API or email service
            // For now, we just show an alert that the message has been sent successfully
            alert("Message Sent Successfully!");

            // Clear the form after submission (optional)
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        } else {
            // If any field is empty, show an alert
            alert("Please fill in all fields before sending.");
        }
    });
