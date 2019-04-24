import quizScore from './quizScore.js';

const submitButton = document.getElementById('submit');
const jackTravelInput = document.getElementById('jackTravel');
const jackMusicInput = document.getElementById('jackMusic');
const jackActivityInput = document.getElementById('jackActivity');
const jackSchoolInput = document.getElementById('jackSchool');
const jackAgeInput = document.getElementById('jackAge');

submitButton.addEventListener('click', () => {
  const travelAnswer = jackTravelInput.value;
  const musicAnswer = jackMusicInput.value;
  const activityAnswer = jackActivityInput.value;
  const schoolAnswer = jackSchoolInput.value;
  const ageAnswer = jackAgeInput.value;

  let score = 0;
  let scoreEl = document.getElementById('score');

  if(travelAnswer.trim() === '' || musicAnswer.trim() === '' || activityAnswer.trim() === ''){
    scoreEl.textContent = 'Please fill in all answers before submitting.';
  } else {
    score = quizScore(travelAnswer, musicAnswer, activityAnswer);
    
    if(score >= 2) {
      scoreEl.classList.add('good');
      scoreEl.classList.remove('bad');
    } else {
      scoreEl.classList.remove('good');
      scoreEl.classList.add('bad');
    }

    scoreEl.textContent = 'Your score: ' + score + '/3' + ' and your percentage: ' + (score / 3) * 100 + '%';
  }
});
