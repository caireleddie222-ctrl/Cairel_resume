
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let visitorName = prompt("Welcome to my professional portfolio! Please enter your name:");
        if (visitorName && visitorName.trim() !== "") {
            document.getElementById('visitor-name').textContent = visitorName.trim();
        }
    }, 500);

    let hour = new Date().getHours();
    let greetingText = (hour < 12) ? "Good morning" : (hour < 18) ? "Good afternoon" : "Good evening";
    document.getElementById('time-greeting').textContent = greetingText;
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Form validation & Variable capturing //
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let messageInput = document.getElementById('message').value;
    let feedback = document.getElementById('form-feedback');
    
    // Validation //
    if (nameInput.trim() === "" || emailInput.trim() === "" || messageInput.trim() === "") {
        feedback.textContent = "Please fill in all required fields.";
    } else {
        feedback.textContent = "";
        

        document.getElementById('modal-name').textContent = nameInput;
        document.getElementById('modal-email').textContent = emailInput;
        document.getElementById('modal-msg').textContent = messageInput;


        $('#submission-modal').fadeIn(250);
        

        this.reset();
    }
});




$(document).ready(function () {

    
    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        
        if ($('body').hasClass('dark-mode')) {
            $(this).text('Light Mode');
        } else {
            $(this).text('Dark Mode');
        }
    });

    
    $('.skill-toggle').on('click', function() {
        
        let icon = $(this).find('.icon');
        
        
        $(this).next('.skill-details').slideToggle(250);
        
        
        if (icon.text() === '+') {
            icon.text('−'); 
        } else {
            icon.text('+');
        }
    });

    
    $('.filter-btn').on('click', function() {
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        let selectedCategory = $(this).attr('data-filter');
        
        if (selectedCategory === 'all') {
            $('.project-card').fadeIn(300);
        } else {
            
            $('.project-card').hide();
            $('.project-card[data-category="' + selectedCategory + '"]').fadeIn(300);
        }
    });

    
    $('#close-modal').on('click', function() {
        $('#submission-modal').fadeOut(250);
    });

});