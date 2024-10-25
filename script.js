async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      document.querySelector('.advice-id').textContent = `Advice #${data.slip.id}`;
      document.querySelector('.advice-text').textContent = `"${data.slip.advice}"`;
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    fetchAdvice();
  });