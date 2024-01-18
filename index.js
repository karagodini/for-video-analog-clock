document.addEventListener('DOMContentLoaded', function () {
    setInterval(updateClock, 1000);
    updateClock(); // вызов функции сразу, чтобы избежать задержки на первом обновлении
  });
  
  function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12; // 12-часовой формат
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
      const digitAngle = (i + 3) * 30; // угол поворота для размещения цифр
      //digit.style.transform = `rotate(${digitAngle}deg) translate(0, -80px)`;
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
