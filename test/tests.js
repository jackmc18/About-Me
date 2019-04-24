import quizScore from '../src/quizScore.js';
const test = QUnit.test;

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

test('two entries are correct with bad capitalization expecting 2', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'vail, colorado';
  const musicAnswer = 'jinsang';
  const activityAnswer = 'reading';
  const expect = 2;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer);
  //Assert
  assert.equal(score, expect);
});

test('All entries are correct but the travelAnswer is missing punctuation expecting 3', assert => {
  //Arrange
  // Set up your parameters and expectations
  const travelAnswer = 'vail colorado';
  const musicAnswer = 'Mac Miller';
  const activityAnswer = 'lacrosse';
  const expect = 3;
  //Act 
  // Call the function you're testing and set the result to a const
  const score = quizScore(travelAnswer, musicAnswer, activityAnswer);
  //Assert
  assert.equal(score, expect);
});




