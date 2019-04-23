const test = QUnit.test;

function quizScore(travelAnswer, musicAnswer, activityAnswer) {
  let score = 0;

  if(travelAnswer === 'Leland, Michigan' || travelAnswer === 'Vail, Colorado' || 
  travelAnswer === 'Munich, Germany' || travelAnswer === 'Innsbruck, Austria' || 
  travelAnswer === 'Venice, Italy') {
    score++;
  }

  if(musicAnswer === 'Muse' || musicAnswer === 'Mac Miller' || 
  musicAnswer === 'Nick Hackim' || musicAnswer === 'Jinsang' || 
  musicAnswer === 'The Beatles') {
    score++;
  }

  if(activityAnswer === 'waterskiing' || activityAnswer === 'lacrosse' || 
  activityAnswer === 'hiking' || activityAnswer === 'video games') {
    score++;
  }

  return score;
}

test('All entries are wrong expecting 0', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'Cleveland, Ohio';
  const musicAnswer = 'Taylor Swift';
  const activityAnswer = 'running';
  const expect = 0;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer);
  //Assert
  assert.equal(score, expect);
});

test('All entries are correct expecting 3', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'Leland, Michigan';
  const musicAnswer = 'Muse';
  const activityAnswer = 'waterskiing';
  const expect = 3;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer);
  //Assert
  assert.equal(score, expect);
});

test('All entries are correct with different answers expecting 3', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'Munich, Germany';
  const musicAnswer = 'The Beatles';
  const activityAnswer = 'video games';
  const expect = 3;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer);
  //Assert
  assert.equal(score, expect);
});

