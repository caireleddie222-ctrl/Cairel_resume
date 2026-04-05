// ==========================================
// VANILLA JAVASCRIPT (Module 4)
// ==========================================

// Feature 1: Prompt-based personalization (Clean implementation)
window.addEventListener('DOMContentLoaded', () => {
    // The timeout ensures the prompt doesn't block the initial visual page load
    setTimeout(() => {
        let visitorName = prompt("Welcome to my professional portfolio! Please enter your name:");
        if (visitorName && visitorName.trim() !== "") {
            document.getElementById('visitor-name').textContent = visitorName.trim();
        }
    }, 500);

    // Feature 2: DOM Element updates (Greeting & Dynamic Year)
    let hour = new Date().getHours();
    let greetingText = (hour < 12) ? "Good morning" : (hour < 18) ? "Good afternoon" : "Good evening";
    document.getElementById('time-greeting').textContent = greetingText;
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Feature 3: Form validation & Variable capturing
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let messageInput = document.getElementById('message').value;
    let feedback = document.getElementById('form-feedback');
    
    // Validation
    if (nameInput.trim() === "" || emailInput.trim() === "" || messageInput.trim() === "") {
        feedback.textContent = "Please fill in all required fields.";
    } else {
        feedback.textContent = ""; // Clear errors
        
        // Populate modal with captured data safely
        document.getElementById('modal-name').textContent = nameInput;
        document.getElementById('modal-email').textContent = emailInput;
        document.getElementById('modal-msg').textContent = messageInput;

        // Show the modal smoothly via jQuery
        $('#submission-modal').fadeIn(250);
        
        // Reset the form fields
        this.reset();
    }
});


// ==========================================
// JQUERY (Module 4.1)
// ==========================================

$(document).ready(function () {

    // jQuery Interaction 1: Theme Toggle
    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        
        if ($('body').hasClass('dark-mode')) {
            $(this).text('Light Mode');
        } else {
            $(this).text('Dark Mode');
        }
    });

    // jQuery Interaction 2: Skill Accordions (slideToggle)
    $('.skill-toggle').on('click', function() {
        // Find the icon span inside the clicked button
        let icon = $(this).find('.icon');
        
        // Slide toggle the details panel smoothly
        $(this).next('.skill-details').slideToggle(250);
        
        // Update the +/- icon
        if (icon.text() === '+') {
            icon.text('−'); // Using a true minus sign for better typography
        } else {
            icon.text('+');
        }
    });

    // jQuery Interaction 3: Project Filters (fadeIn/fadeOut for smoother UX)
    $('.filter-btn').on('click', function() {
        // Manage active button state
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        let selectedCategory = $(this).attr('data-filter');
        
        if (selectedCategory === 'all') {
            $('.project-card').fadeIn(300);
        } else {
            // Hide all cards first, then fade in the matched ones
            $('.project-card').hide();
            $('.project-card[data-category="' + selectedCategory + '"]').fadeIn(300);
        }
    });

    // jQuery Interaction 4: Close Modal smoothly
    $('#close-modal').on('click', function() {
        $('#submission-modal').fadeOut(250);
    });

});