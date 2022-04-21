import React from "react";
import { useForm } from "react-hook-form";

export default function User() {
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

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("username")} />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}
