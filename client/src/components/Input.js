import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function UserInput() {
    const [userInput, setUserInput] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(userInput);
      }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Choose the number of players:
                <select>
                    <option id="P1" value="1">1</option>
                    <option id="P2" value="2">2</option>
                    <option id="P3" value="3">3</option>
                    <option id="P4" value="4">4</option>
                    <option id="P5"value="5">5</option>
                </select>
            </label>
            
      <label>Enter your names of players:</label>
      <input 
        type="text"
        id="P1" 
        name="username1" 
        value={inputs.username1 || ""} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        id="P2"
        name="username2" 
        value={userInput.username || ""} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        id="P3"
        name="username3" 
        value={userInput.username || ""} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        id="P4"
        name="username4" 
        value={userInput.username || ""} 
        onChange={handleChange}
        />
        <input 
        type="text" 
        id="P5"
        name="username5" 
        value={userInput.username || ""} 
        onChange={handleChange}
        />
        <input type="submit" value = "Load Quizz"/>
        </form>
    )
}

