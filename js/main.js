// Add your JavaScript code here
// You can handle form submissions, implement search functionality, etc.
// For example, to handle form submissions on login.html and register.html:


// handle Search function

function handleSearch() {
    // Redirect to search.html
    alert("Enter the details again -> Redirecting to Search page")
    window.location.href = "search.html";
}

// Add an event listener to the search form
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    handleSearch(); // Call the handleSearch function
});

// Login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Retrieve form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login logic here
    // ...
});

// Registration form submission
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Retrieve form data
    const companyName = document.getElementById('company-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform registration logic here
    // ...
});

// You can add similar event listeners and functionality for other pages as needed
