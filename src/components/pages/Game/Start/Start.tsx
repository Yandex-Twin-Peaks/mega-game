import React, { useState } from 'react';
import GameDash from './../GameDash/GameDash';
import './Start.pcss';

function Start() {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
  };
  const [number, setTerm] = useState(0);
  const [submitted, setSubmit] = useState(false);
  return (
    <>
      {submitted ? (
        <GameDash number={number} />
      ) : (
        <div className='Start-container'>
          <span className='Start-title'>Игра начинается введите количество буковок</span>
          <form className='Start-form' onSubmit={submitForm}>
            <input
              value={number}
              onChange={(e) => setTerm(Number(e.target.value))}
              type='number'
              placeholder='Enter a term'
              className='input'
            />
            <button type='submit' className='Start-btn'>
              Ввод
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default Start;
