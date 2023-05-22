const form = document.querySelector('form')
const radioButtons = document.querySelectorAll('input[type="radio"]');
const correctAnwer = ['A', 'A', 'A', 'D', 'B', 'C', 'C', 'E', 'B', 'C']
const result = document.querySelector('.score-result')
const container = document.querySelector('.container')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal-close-button')


form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

  userAnswer.forEach( (answer, index) => {
    if(answer === correctAnwer[index]) {
      score += 10;
    }
  });

  scrollTo(0, 0);

  modal.showModal()
 
  closeModal.addEventListener('click', () => {
    modal.close()
  });
  
  let output = 0;
  const timer = setInterval( () => {
    
    result.querySelector('span').textContent = `${output}%!`

    if(output === score) {
      clearInterval(timer);
    } else {
      output++;
    }

    // if(output === 0) {
    //   result.querySelector('span').textContent = `${output}% Better luck next time :(`
    // }
  }, 15);

    

  radioButtons.forEach( buttons => {
    buttons.checked = false;
  })
});



//pre loader --
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader-hidden');
});

setTimeout(function() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}, 2800); // Adjust the timeout value (in milliseconds) as needed

