// Function to send whatsapp text
function openWhatsApp() {

    let phoneNumber = "9819041024";  // Replace with your phone number
    let message = "Hello, I want to inquire about your services.";


    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}


// Function to compose email from Contact page
// function composeEmail() {
//     var senderName = document.getElementById("senderName").value;
//     var senderEmail = document.getElementById("senderEmail").value;
//     var subject = document.getElementById("messageSubject").value;
//     var message = document.getElementById("userMessage").value;

//     // Validate inputs
//     if (!senderName || !senderEmail || !subject || !message) {
//         alert("Please fill out all fields before sending the email.");
//         return;
//     }

//     // Construct mailto link
//     var mailtoLink = 
//         "mailto:adideshmukh17@gmail.com" +
//         "?subject=" + encodeURIComponent(subject) +
//         "&body=" + encodeURIComponent(message + "\n\nFrom, \n" + senderName + "\nEmail: " + senderEmail);

//     console.log(mailtoLink); // Debugging
//     window.location.href = mailtoLink; // Redirect to mailto
// }

function composeEmail(event) {
    // Prevent default form submission if used in a form
    if (event) event.preventDefault();
    
    try {
        // Get elements and validate they exist
        const senderNameEl = document.getElementById("senderName");
        const senderEmailEl = document.getElementById("senderEmail");
        const subjectEl = document.getElementById("messageSubject");
        const messageEl = document.getElementById("userMessage");
        
        if (!senderNameEl || !senderEmailEl || !subjectEl || !messageEl) {
            throw new Error("Required form fields are missing");
        }

        // Get values and validate they're not empty
        const senderName = senderNameEl.value.trim();
        const senderEmail = senderEmailEl.value.trim();
        const subject = subjectEl.value.trim();
        const message = messageEl.value.trim();
        
        if (!senderName || !senderEmail || !subject || !message) {
            alert("Please fill in all fields");
            return;
        }

        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
            alert("Please enter a valid email address");
            return;
        }

        // Construct mailto link
        const mailtoLink = `mailto:adideshmukh17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom,\n${senderName}\nEmail: ${senderEmail}`)}`;

        // Open email client
        window.location.href = mailtoLink;
        
    } catch (error) {
        console.error("Error composing email:", error);
        alert("There was an error composing the email. Please try again.");
    }
}



// Testimonial Carousel 
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showTestimonial(n) {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.remove('active');
        dots[index].classList.remove('active');
        if (index === n) {
            testimonial.classList.add('active');
            dots[n].classList.add('active');
        }
    });
}

function currentSlide(n) {
    currentTestimonialIndex = n - 1;  // Index starts from 0
    showTestimonial(currentTestimonialIndex);
}

function nextSlide() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

// Auto rotate testimonials every 6 seconds
setInterval(nextSlide, 6000);

