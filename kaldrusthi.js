
  // Attempt to autoplay audio when the document is ready
  window.addEventListener('load', function() {
    const audio = document.getElementById('backgroundAudio');
    audio.play().catch(function(error) {
      console.log('Autoplay was prevented by the browser:', error);
    });
  });









function analyzeSearch() {
    // Get the search box value
    const searchValue = document.getElementById("searchInput").value;
    
    // Check if the input is empty
    if (searchValue.trim() === "") {
        alert("Please enter a query.");
        return;
    }

    // Process the result (simple analysis for demonstration)
    let resultText = "";
    //game
    if (searchValue === "game") {
        resultText = "you can search that 1.puzzle, 2.";
       
        //name
    } 
    else if (searchValue === "puzzle") {
        resultText = "";
        location.href = 'game/puzzle.html';
    } 
    else if (searchValue === "login") {
        resultText = "";
        location.href = 'login.htm';
    } 
    else if (searchValue === "message") {
        resultText = "";
        location.href = 'login.htm';
    } 
    else if (searchValue === "shubh") {
        resultText = "the creater of kaldrusthi";
    } else if (searchValue=== "riyansh") {
        resultText = "khatik";
    } else {
        resultText = "Sorry, no specific information is available of this name .you can search  'login' and 'message' for feedback to me.";
    }

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = resultText;
}
