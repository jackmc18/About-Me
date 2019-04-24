import quizScore from './quizScore.js';

const submitButton = document.getElementById('submit');
const jackTravelInput = document.getElementById('jackTravel');
const jackMusicInput = document.getElementById('jackMusic');
const jackActivityInput = document.getElementById('jackActivity');

submitButton.addEventListener('click', () => {
  const travelAnswer = jackTravelInput.value;
  const musicAnswer = jackMusicInput.value;
  const activityAnswer = jackActivityInput.value;

  let score = 0;
  let scoreEl = document.getElementById('score');

  score = quizScore(travelAnswer, musicAnswer, activityAnswer);

  scoreEl.textContent = 'Your score: ' + score + '/3';

  console.log(score);
});
