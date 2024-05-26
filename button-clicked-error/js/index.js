document.addEventListener('DOMContentLoaded', (event) => {
    let errorElement = document.getElementById("error");
    console.log(errorElement); // Ensure the element is correctly selected
    
    window.errorOccur = function() {
        errorElement.textContent = "Something went wrong, please try again later";
        errorElement.style.display = "block"; // Make the error message visible
    };
});
