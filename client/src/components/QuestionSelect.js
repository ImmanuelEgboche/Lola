import React, { useState } from 'react';

export default function QuestionSelect() {
    const [options, setOptions] = useState(null);

    const [questionDifficulty, setQuestionDifficulty] = useState("");

    const [questionType, setQuestionType] = useState("");

	const [numberOfQuestions, setNumberOfQuestions] = useState(10);


      // event that is called when a difficult is chosen
    const handleDifficultyChange = event => {
        dispatch({
            type: 'CHANGE_DIFFICULTY',
            value: event.target.value
          })
      }

    const handleTypeChange = event => {
        dispatch({
            type: 'CHANGE_TYPE',
            value: event.target.value
          })
  }
	const handleNumberOfQuestions = event => {
        dispatch({
            type: 'CHANGE_AMOUNT',
            value: event.target.value
          })
    }

    return (
      <div>
        <div>
          <h2>Select Difficulty:</h2>
          <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value="" key="difficulty-0">All</option>
            <option value="easy" key="difficulty-1">Easy</option>
            <option value="medium" key="difficulty-2">Medium</option>
            <option value="hard" key="difficulty-3">Hard</option>
          </select>
        </div>
        <div>
          <h2>Select Question Type:</h2>
          <select value={questionType} onChange={handleTypeChange}>
            <option value="" key="type-0">All</option>
            <option value="multiple" key="type-1">Multiple Choice</option>
            <option value="boolean" key="type-2">True/False</option>
          </select>
        </div>
		<div>
          <h2>Amount of Questions:</h2>
          <input value={numberOfQuestions} onChange={handleNumberOfQuestions} placeholder="Number of questions"/>
        </div>
      </div>
    );
}

