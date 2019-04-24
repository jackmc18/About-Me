import quizScore from '../src/quizScore.js';
const test = QUnit.test;

test('All entries are wrong expecting 0', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'Cleveland, Ohio';
  const musicAnswer = 'Taylor Swift';
  const activityAnswer = 'running';
  const schoolAnswer = 'Ohio State';
  const ageAnswer = '20';
  const expect = 0;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer, schoolAnswer, ageAnswer);
  //Assert
  assert.equal(score, expect);
});

test('All entries are correct expecting 5', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'Leland, Michigan';
  const musicAnswer = 'Muse';
  const activityAnswer = 'waterskiing';
  const schoolAnswer = 'university of dayton';
  const ageAnswer = '23';
  const expect = 5;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer, schoolAnswer, ageAnswer);
  //Assert
  assert.equal(score, expect);
});

test('three entries are correct with different answers expecting 3', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'Munich, Germany';
  const musicAnswer = 'The Beatles';
  const activityAnswer = 'video games';
  const schoolAnswer = 'UCLA';
  const ageAnswer = '32';
  const expect = 3;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer, schoolAnswer, ageAnswer);
  //Assert
  assert.equal(score, expect);
});

test('four entries are correct with bad capitalization expecting 4', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'vail, colorado';
  const musicAnswer = 'jinsang';
  const activityAnswer = 'reading';
  const schoolAnswer = 'unIveRsity OF Dayton';
  const ageAnswer = '23';
  const expect = 4;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer, schoolAnswer, ageAnswer);
  //Assert
  assert.equal(score, expect);
});

test('All entries are correct but the travelAnswer is missing punctuation expecting 5', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'vail colorado';
  const musicAnswer = 'Mac Miller';
  const activityAnswer = 'lacrosse';
  const schoolAnswer = 'university of dayton';
  const ageAnswer = '23';
  const expect = 5;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer, schoolAnswer, ageAnswer);
  //Assert
  assert.equal(score, expect);
});




