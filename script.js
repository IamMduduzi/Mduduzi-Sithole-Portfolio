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

     function validateForm() {
        // Get form elements
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var subject = document.getElementById('subject');
        var message = document.getElementById('message');
        
        // Clear previous error messages
        clearErrorMessages();
    
        // Validation flags
        var valid = true;
    
        // Validate name (must not be empty)
        if (name.value.trim() === "") {
            showErrorMessage(name, "Please enter your name.");
            valid = false;
        }
    
        // Validate email (must not be empty and must be in a valid email format)
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.value.trim() === "") {
            showErrorMessage(email, "Please enter your email.");
            valid = false;
        } else if (!emailPattern.test(email.value)) {
            showErrorMessage(email, "Please enter a valid email address.");
            valid = false;
        }
    
        // Validate subject (must not be empty)
        if (subject.value.trim() === "") {
            showErrorMessage(subject, "Please enter a subject.");
            valid = false;
        }
    
        // Validate message (must not be empty)
        if (message.value.trim() === "") {
            showErrorMessage(message, "Please enter your message.");
            valid = false;
        }
    
        // If form is valid, submit the form or proceed
        if (valid) {
            alert("Form submitted successfully!");
            // Uncomment this line to actually submit the form
            // document.getElementById("yourFormId").submit();
        }
    
        return valid; // Return false to prevent form submission if invalid
    }
    
    // Function to show an error message next to an input field
    function showErrorMessage(inputElement, message) {
        // Create an error message element
        var errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
    
        // Insert the error message after the input field
        inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    }
    
    // Function to clear any previous error messages
    function clearErrorMessages() {
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (message) {
            message.remove();
        });
    }
    
