import React from 'react';
import React, { useEffect, useState } from 'react';

function Settings() {
    const [loading, setLoading] = useState(false);
    // useState hook 1
    const [options, setOptions] = useState(null);

    // useState hook 2
    const [questionCategory, setQuestionCategory] = useState("");

    // useState hook 3
    const [questionDifficulty, setQuestionDifficulty] = useState("");
	
	// useEffect hook
	useEffect(() => {
	    const apiUrl = `https://opentdb.com/api_category.php`;
	
	    fetch(apiUrl)
	      .then((res) => res.json())
	      .then((response) => {
	        setOptions(response.trivia_categories);
	      });
	  }, [setOptions]);

      // event that is called when an option is chosen
	const handleCategoryChange = event => {
        setQuestionCategory(event.target.value)
      }
      // event that is called when a difficult is chosen
    const handleDifficultyChange = event => {
        setQuestionDifficulty(event.target.value)
      }





if (!loading) {
	  return (
		<div>
            <div>
              <h2>Select Category:</h2>
              <select value={questionCategory} onChange={handleCategoryChange}>
                <option>All</option>
                  {options && 
                  options.map((option) => (
                  <option value={option.id} key={option.id}>
                  {option.name}
                  </option>
                  ))}
              </select>
            </div>
        </div>
  	  );
  } else {
      <p>
          Loading...
      </p>
  }
}
export default Settings;
