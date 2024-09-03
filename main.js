function viewDetails(title, artist, description, imageUrl) {
    // Get the modal element
    var modal = document.getElementById("artModal");

    // Get the elements inside the modal
    var modalTitle = document.getElementById("artTitle");
    var modalArtist = document.getElementById("artistName");
    var modalDescription = document.getElementById("artDescription");
    var modalImage = document.getElementById("artImage");

    // Set the content inside the modal
    modalTitle.textContent = title;
    modalArtist.textContent = artist;
    modalDescription.textContent = description;
    modalImage.src = imageUrl;

    // Display the modal
    modal.style.display = "block";
}

function closeModal() {
    // Get the modal element
    var modal = document.getElementById("artModal");

    // Hide the modal
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    var modal = document.getElementById("artModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
