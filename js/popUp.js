

// Function to close the popup when clicking outside the form
window.onclick = function(event) {
  var popupOverlay = document.getElementById("popupOverlay");
  var popupForm = document.getElementById("popupForm");

  // Check if the clicked target is the overlay (outside the form)
  if (event.target == popupOverlay) {
      // Close the popup form
      popupOverlay.style.display = "none";
  }
}



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

