function startCountdown(duration) {
  const hoursElem = document.querySelector('.timer-hours span')
  const minutesElem = document.querySelector('.timer-minutes span')
  const secondsElem = document.querySelector('.timer-seconds span')

  function updateTimer() {
    const now = new Date().getTime()
    const distance = endTime - now

    if (distance < 0) {
      clearInterval(timerInterval)
      alert('Таймер завершен')
      return
    }

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    hoursElem.textContent = String(hours).padStart(2, '0')
    minutesElem.textContent = String(minutes).padStart(2, '0')
    secondsElem.textContent = String(seconds).padStart(2, '0')
  }

  const endTime = new Date().getTime() + duration
  localStorage.setItem('endTime', endTime)

  const timerInterval = setInterval(updateTimer, 1000)
}

const savedEndTime = localStorage.getItem('endTime')
if (savedEndTime) {
  const now = new Date().getTime()
  const remainingTime = savedEndTime - now
  if (remainingTime > 0) {
    startCountdown(remainingTime)
  } else {
    localStorage.removeItem('endTime')
    startCountdown(1 * 60 * 60 * 1000 + 48 * 60 * 1000 + 47 * 1000)
  }
} else {
  startCountdown(1 * 60 * 60 * 1000 + 48 * 60 * 1000 + 47 * 1000)
}

window.addEventListener('beforeunload', () => {
  localStorage.removeItem('endTime')
})

// function activateButton(button) {
//   var buttons = document.querySelectorAll('.stickers-button')
//   buttons.forEach(function (btn) {
//     btn.classList.remove('active')
//   })

//   button.classList.add('active')
// }


function showSlide(slideNumber) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = (index + 1 === slideNumber) ? 'flex' : 'none';
  });

  const buttons = document.querySelectorAll('.stickers-button');
  buttons.forEach((button, index) => {
    button.classList.toggle('active', index + 1 === slideNumber);
  });
}









  