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

  score = quizScore(travelAnswer, musicAnswer, activityAnswer);

  console.log(score);
});
