document.addEventListener('DOMContentLoaded', function () {
    setInterval(function() {
      updateClock();
      updateTime();
      updateDateInfo();
    }, 1000);
    updateClock();
    updateTime();
    updateDateInfo()
  });
  
  function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    rotateHand('hourHand', (hour + minute / 60) * 30);
    rotateHand('minuteHand', (minute + second / 60) * 6);
    rotateHand('secondHand', second * 6);

    updateDigits();
  }
  
  function rotateHand(handId, degrees) {
    const hand = document.getElementById(handId);
    hand.style.transform = `rotate(${degrees}deg)`;
  }
  
  function updateDigits() {
    const digitsContainer = document.getElementById('digits');
    digitsContainer.innerHTML = '';
  
    for (let i = 1; i <= 12; i++) {
      const digit = document.createElement('div');
      digit.className = 'digit';
      digit.textContent = i;
      digitsContainer.appendChild(digit);
      const digitAngle = (i + 3) * 30;
      const radius = 80;
      const digitRadians = (digitAngle * Math.PI) / 180;
      const digitX = Math.sin(digitRadians) * radius - 90;
      const digitY = Math.cos(digitRadians) * (-radius) + 95;

      const correctedX = digitY;
      const correctedY = -digitX;

      digit.style.left = `${correctedX}px`;
      digit.style.top = `${correctedY}px`;
    }
  }

  function updateTime() {
    const digitNow = new Date();
    const digitHours = digitNow.getHours().toString().padStart(2, '0');
    const digitMinutes = digitNow.getMinutes().toString().padStart(2, '0');
    const digitSeconds = digitNow.getSeconds().toString().padStart(2, '0');

    const timeString = `${digitHours}:${digitMinutes}:${digitSeconds}`;
    document.getElementById('digital-clock').innerText = timeString;
}


function updateDateInfo() {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const nowDate = new Date();
  const dateInfo = new Intl.DateTimeFormat('ru-RU', options).format(nowDate);

  document.getElementById('date-info').innerText = dateInfo;
}
