import React, { useEffect, useState } from 'react';
import QuestionSelect from './QuestionSelect'
import UserInput from './Input';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Settings() {
  const [options, setOptions] = useState(null);
  // useState hooks for loading and question options
  const loading = useSelector(state => state.options.loading)
  
  const questionCategory = useSelector(state => state.options.question_category)

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
        handleLoadingChange(false);
        setOptions(response.trivia_categories);
      });
  }, [setOptions, dispatch]);

      // event that is called when an option is chosen
      const handleCategoryChange = (event) => {
        dispatch({
          type: 'CHANGE_CATEGORY',
          question_category: event.target.value,
        })
      }

      const navigate = useNavigate();
      function handleNext() {
        navigate('/users')
      }
      



if (!loading) {
	  return (
      <main id="appMain">
      <div>
        <h1>Quizz App</h1>
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
      <button onClick={handleNext}>Next</button>
      </div>
      </main>
    )
  } else {
      <p>
          Loading...
      </p>
  }

      }







export default Settings;
