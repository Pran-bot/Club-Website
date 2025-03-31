document.getElementById("adminForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission refresh

    // Get form values
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const email = document.getElementById("email").value;

    // Store values in local storage (optional)
    localStorage.setItem("websiteTitle", title);
    localStorage.setItem("websiteDescription", description);
    localStorage.setItem("adminEmail", email);

    alert("Form submitted successfully!");

    // Redirect to main page (update with your actual URL)
    window.location.href = "webpage2.html";
});
