// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// export default function UserForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
    
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let name = prompt('Enter merchant name');
//     let email = prompt('Enter merchant email')

//     console.log(name)
//     console.log(email)
//     alert(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your names:
//       <input 
//         type="text" 
//         name="player1" 
//         value={inputs.player1 || ""} 
//         onChange={handleChange}
//       />
//       <input 
//         type="text" 
//         name="player2" 
//         value={inputs.player2 || ""} 
//         onChange={handleChange}
//       />
//       <input 
//         type="text" 
//         name="player3" 
//         value={inputs.player3 || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <input type="submit" value = "Load Quizz"/>
//     </form>
//   )
// }

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => submit(data);
  const onError = (errors, e) => console.log(errors, e);

  function submit (data) {
    console.log(data)
    fetch('http://localhost:3000/leaderboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      return response.text();
    })
  }

  const navigate = useNavigate();
      function handleNext() {
        navigate('/quiz')
      }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
    <button onClick={handleNext}>Next</button>
    </>
  );
}






