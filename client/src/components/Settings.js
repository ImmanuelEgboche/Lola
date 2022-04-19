import React, { useEffect, useState } from 'react';
import QuestionSelect from './QuestionSelect'
import UserInput from './Input';
import { useSelector, useDispatch } from 'react-redux'

function Settings() {
  // useState hooks for loading and question options
    const [loading, setLoading] = useState(false);
  
    const [options, setOptions] = useState(null);

    const [questionCategory, setQuestionCategory] = useState("");

      // event that is called when an option is chosen
	  const handleCategoryChange = event => {
      dispatch({
        type: 'CHANGE_CATEGORY',
        value: event.target.value
      })
      }

 // defining to dispatch the actions
  const dispatch = useDispatch()

	// useEffect hook
	useEffect(() => {
	    const apiUrl = `https://opentdb.com/api_category.php`;
	
      const handleLoadingChange = value => {
        dispatch({
          type: 'CHANGE_LOADING',
          loading: value
        })
      }

      handleLoadingChange(true);
	    fetch(apiUrl)
	      .then((res) => res.json())
	      .then((response) => {
	        setOptions(response.trivia_categories);
	      });
	  }, [setOption, dispatch]);

    

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
      <QuestionSelect />
      <button>Next</button>
      </div>
    )
  } else {
      <p>
          Loading...
      </p>
  }

      }







export default Settings;
