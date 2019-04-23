const test = QUnit.test;

function quizScore(travelAnswer, musicAnswer, activityAnswer) {
  let score = 0;

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