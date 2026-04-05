# AI Prompt Log

## Entry #1: Dark Mode Implementation
**Tool Used:** Gemini
**Prompt (copy-paste exactly):** "How do I create a dark mode switch for my HTML website using CSS variables and jQuery? I want the button text to change from 'Dark Mode' to 'Light Mode' when clicked."
**AI Output (summary or screenshot reference):** The AI explained how to set up `:root` for light theme colors and a `body.dark-mode` class for dark theme colors. It provided a jQuery snippet using `.toggleClass('dark-mode')` and an `if/else` statement to change the button text.
**How I used/modified it in my project:** I applied the CSS variables to my `style.css` to match my specific color palette (using slate and blue tones). I then added the jQuery script to my `script.js` file inside the `$('#theme-toggle').on('click')` event.

--------------------------------------------

## Entry #2: Form Submission and Modal Popup
**Tool Used:** ChatGPT
**Prompt (copy-paste exactly):** "How can I stop an HTML contact form from refreshing the page when submitted? Instead of sending an email, I want to take the name, email, and message the user typed and display it inside a hidden div (modal) on the screen."
**AI Output (summary or screenshot reference):** The AI showed me how to use `e.preventDefault()` on the form submit event. It also demonstrated how to grab values using `document.getElementById('id').value` and inject them into empty span tags using `.textContent`.
**How I used/modified it in my project:** I integrated this into my `contact-form` event listener. I added an extra validation step to check if the inputs were empty (`.trim() === ""`) before triggering the modal. I also used jQuery's `.fadeIn(250)` to make the modal appear smoothly instead of just changing the CSS display property instantly.

--------------------------------------------

## Entry #3: Project Filtering Logic
**Tool Used:** Gemini
**Prompt (copy-paste exactly):** "I have a grid of project cards. How do I make category buttons at the top that filter out the cards? For example, if I click 'Web Apps', it only shows cards with web apps. I am using jQuery."
**AI Output (summary or screenshot reference):** The AI suggested adding `data-category` attributes to my project HTML divs and `data-filter` attributes to my buttons. It provided a script that hides all cards using `.hide()` and then uses `.fadeIn()` on cards that match the specific data attribute.
**How I used/modified it in my project:** I added `data-category="system"` and `data-category="web"` to my HTML structure. In `script.js`, I adapted the logic to also manage the active state of the buttons (adding/removing the `.active` class) so the user knows which filter is currently selected.