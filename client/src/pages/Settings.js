import React from 'react'
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import Button from 'react-bootstrap/Button';


const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();





if (loading) {
  return (
    <div>
      Loading..
    </div>
  );
}

if (error) {
  return (
    <div>
      Something Went Wrong!
    </div>
    
  );
}


const difficultyOptions = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Medium" },
  { id: "hard", name: "Hard" },
];

const typeOptions = [
  { id: "multiple", name: "Multiple Choice" },
  { id: "boolean", name: "True/False" },
];

const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/questions");
};

return (
  <form onSubmit={handleSubmit}>
    <SelectField options={response.trivia_categories} label="Category" />
    <SelectField options={difficultyOptions} label="Difficulty" />
    <SelectField options={typeOptions} label="Type" />
    <TextFieldComp />
    <Button  type="submit">
          Get Started
        </Button>
        
      
  </form>
);
};

export default Settings;
