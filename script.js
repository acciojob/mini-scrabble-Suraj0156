//your code here
document.addEventListener('DOMContentLoaded', () => {
  const evaluatedText = document.getElementById('evaluatedText');
  const letterCount = document.getElementById('letterCount');

  // Function to update letter count in real-time
  const updateLetterCount = () => {
    const text = evaluatedText.value;
    const count = text.length;
    letterCount.textContent = count;
  };

  // Attach event listener to the input textbox
  evaluatedText.addEventListener('input', updateLetterCount);

  // Initialize letter count to 0 on page load
  updateLetterCount();
});

