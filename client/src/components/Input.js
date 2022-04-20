import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function UserForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Game is about to begin");
  }

  return (
    <form id onSubmit={handleSubmit}>
      <label id ="user">Please enter your usernames:
      <input 
        type="text" 
        name="player1" 
        value={inputs.player1 || ""} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="player2" 
        value={inputs.player2 || ""} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="player3" 
        value={inputs.player3 || ""} 
        onChange={handleChange}
      />
      </label>
      <input id = "btn" type="submit" value = "Start"/>
    </form>
  )
}

// class UserInput extends Component {
//    state = {
//      player1: "",
//      player2: "",
//      player3: "",
//    }

//       handleState = (event) => {
//         event.preventDefault();
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({...this.state, [name]: value})
//       }
      
    
//       handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.set(this.state);
//       }


//     render (){
//       console.log(this.state);
//       return(
//         <div>
//         <form onSubmit={this.handleSubmit}>            
//       <label>Enter player names:
//       <input 
//         type="text"
//         id="P1" 
//         name="username1" 
//         placeholder="Player 1"
//         value={this.state.username1.value} 
//         onChange={this.handleState}
//         />
//         <input 
//         type="text" 
//         id="P2"
//         name="username2" 
//         placeholder="Player 2"
//         value={this.state.username2.value} 
//         onChange={this.handleState}
//         />
//         <input 
//         type="text" 
//         id="P3"
//         name="username3" 
//         placeholder="Player 3"
//         value={this.state.username3.value} 
//         onChange={this.handleState}
//         />
//         </label>
//         <input type="submit" value = "Load Quizz"/>
//         </form>
//         </div>
//     )
//   }
// }

// export default UserInput
