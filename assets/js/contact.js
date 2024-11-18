// Function to send whatsapp text
function openWhatsApp() {

    let phoneNumber = "9819041024";  // Replace with your phone number
    let message = "Hello, I want to inquire about your services.";


    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}


// Function to compose email from Contact page
function composeEmail() {
    var senderName = document.getElementById("senderName").value;
    var senderEmail = document.getElementById("senderEmail").value;
    var subject = document.getElementById("messageSubject").value;
    var message = document.getElementById("userMessage").value;

    var mailtoLink = 
        "mailto:adideshmukh17@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message + "\n\nFrom, \n" + senderName + "\nEmail: " + senderEmail);

    window.location.href = mailtoLink;
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

// Auto rotate testimonials every 3 seconds
setInterval(nextSlide, 3000);

