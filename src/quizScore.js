function quizScore(travelAnswer, musicAnswer, activityAnswer) {
  let score = 0;

  travelAnswer = travelAnswer.toLowerCase();
  travelAnswer = travelAnswer.replace(',', '');
  musicAnswer = musicAnswer.toLowerCase();
  activityAnswer = activityAnswer.toLowerCase();


  if(travelAnswer === 'leland michigan' || travelAnswer === 'vail colorado' || 
  travelAnswer === 'munich germany' || travelAnswer === 'innsbruck austria' || 
  travelAnswer === 'venice italy') {
    score++;
  }

  if(musicAnswer === 'muse' || musicAnswer === 'mac miller' || 
  musicAnswer === 'nick hackim' || musicAnswer === 'jinsang' || 
  musicAnswer === 'the beatles') {
    score++;
  }

  if(activityAnswer === 'waterskiing' || activityAnswer === 'lacrosse' || 
  activityAnswer === 'hiking' || activityAnswer === 'video games') {
    score++;
  }

  return score;
}

export default quizScore;