import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/action";
import Button from 'react-bootstrap/Button';
import User from './input'

const FinalScreen = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    navigate("/");
  };

  return (
    <div id="db">
      <User />
      
        FinalScore {score}  
        
      <div>
      <Button onClick={handleBackToSettings} variant="outlined">
        back to Home!
      </Button>
      </div>


  </div>
  );
};

export default FinalScreen;
