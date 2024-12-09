const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice');
const button = document.querySelector('.dice-container');

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        adviceNumber.textContent = `Advice #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
      } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = "Couldn't fetch advice. Please try again.";
      }
  }

button.addEventListener('click', fetchAdvice);