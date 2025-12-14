// --- ELEMENTS ---
// Custom: start menu + navigation
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const normalBtn = document.getElementById('normal-btn');
const timedBtn = document.getElementById('timed-btn');
const backButton = document.getElementById('back-button');

// Custom: timer elements
const timerDisplay = document.getElementById('timer');
const timeSpan = document.getElementById('time');

let timerInterval;
let timeLeft;

// --- START SCREEN BUTTONS ---
// Custom logic (not in video)
normalBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  timerDisplay.style.display = 'none';
  startGame(false);
});

timedBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  gameScreen.style.display = 'block';
  timerDisplay.style.display = 'block';
  startGame(true);
});

backButton.addEventListener('click', () => {
  startScreen.style.display = 'block';
  gameScreen.style.display = 'none';
  clearInterval(timerInterval);
});

// ==================================================
// MEMORY GAME LOGIC
// ==================================================
function startGame(isTimed) {
  const gameBoard = document.getElementById('game-board');
  const statusText = document.getElementById('status');
  const restartButton = document.getElementById('restart-button');

  // Reset UI text (FIX for "You won!" bug)
  statusText.textContent = "Find all matching pairs!";

  // Custom: your own images instead of symbols
  const symbols = [
    'images/1000002261.jpg',
    'images/1000002262.jpg',
    'images/1000002264.jpg',
    'images/1000002265.jpg',
    'images/1000002266.jpg',
    'images/20251214_191648 - kopia.jpg'
  ];

  // Video logic: duplicate + shuffle
  let cards = shuffle([...symbols, ...symbols]);

  // Game state (from video, slightly adapted)
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let matchedPairs = 0;
  let gameStarted = false; // ✅ Custom fix

  // --------------------------------------------------
  // CREATE CARDS (video logic, adapted for images)
  // --------------------------------------------------
  function createCards() {
    gameBoard.innerHTML = '';

    cards.forEach(imgSrc => {
      const card = document.createElement('div');
      card.classList.add('Card');

      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <img src="${imgSrc}" alt="Memory card">
          </div>
          <div class="card-back">
            <img src="images/HiPaint_1765728439769.png" alt="Card back">
          </div>
        </div>
      `;

      gameBoard.appendChild(card);

      // ----------------------------------------------
      // CLICK LOGIC
      // From video, modified to use images
      // ----------------------------------------------
      card.addEventListener('click', () => {
        if (lockBoard || card.classList.contains('flipped')) return;

        gameStarted = true; // Custom: prevents instant win
        card.classList.add('flipped');

        if (!firstCard) {
          firstCard = card;
          return;
        }

        secondCard = card;
        lockBoard = true;

        const firstImg = firstCard.querySelector('.card-front img').src;
        const secondImg = secondCard.querySelector('.card-front img').src;

        if (firstImg === secondImg) {
          matchedPairs++;
          resetTurn();

          // Win condition (video logic)
          if (matchedPairs === symbols.length && gameStarted) {
            statusText.textContent = "You won! 🎉";
            clearInterval(timerInterval);
            if (isTimed) launchConfetti(); // Custom
          }
        } else {
          setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetTurn();
          }, 1000);
        }
      });
    });
  }

  function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }

  // --------------------------------------------------
  // SHUFFLE FUNCTION (FROM VIDEO)
  // --------------------------------------------------
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // --------------------------------------------------
  // TIMED MODE (CUSTOM FEATURE)
  // --------------------------------------------------
  if (isTimed) {
    timeLeft = 60;
    timeSpan.textContent = timeLeft;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
      timeLeft--;
      timeSpan.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        statusText.textContent = "Time's up! 😢";
        document.querySelectorAll('.Card').forEach(c =>
          c.classList.add('flipped')
        );
      }
    }, 1000);
  }

  // --------------------------------------------------
  // RESTART BUTTON (CUSTOM)
  // --------------------------------------------------
  restartButton.onclick = () => {
    matchedPairs = 0;
    gameStarted = false;
    statusText.textContent = "Find all matching pairs!";
    cards = shuffle([...symbols, ...symbols]);
    createCards();

    if (isTimed) {
      clearInterval(timerInterval);
      timeLeft = 60;
      timeSpan.textContent = timeLeft;
      timerInterval = setInterval(() => {
        timeLeft--;
        timeSpan.textContent = timeLeft;
      }, 1000);
    }
  };

  // --------------------------------------------------
  // CONFETTI (100% CUSTOM)
  // --------------------------------------------------
  function launchConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360},70%,60%)`;
      container.appendChild(confetti);
      setTimeout(() => confetti.remove(), 1000);
    }
  }

  createCards();
}
