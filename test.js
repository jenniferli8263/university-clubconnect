// Check the initial selection on page load
window.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="option"]');
    const storedValue = localStorage.getItem('selectedOption');
  
    if (storedValue) {
      radioButtons.forEach(radio => {
        if (radio.value === storedValue) {
          radio.checked = true;
        }
      });
    }
  });
  
  // Check the selection on button click
  function checkSelection() {
    const radioButtons = document.querySelectorAll('input[name="option"]:checked');
    const resultDiv = document.getElementById('result');
  
    if (radioButtons.length > 0) {
      const selectedOption = radioButtons[0].value;
      resultDiv.innerHTML = `Selected option: ${selectedOption}`;
  
      // Store the selected option in localStorage
      localStorage.setItem('selectedOption', selectedOption);
    } else {
      resultDiv.innerHTML = 'No option selected.';
    }
  }
  