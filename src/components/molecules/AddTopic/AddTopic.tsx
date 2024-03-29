import React, { useState } from 'react';
import './AddTopic.pcss';
import { TextField } from '@mui/material';
import Input from '../../atoms/Input/Input';
// import Canvas from '../Canvas';
// import getCanvasPic from '../../../utils/getCanvasPic';
// import Button from '../../atoms/Button';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { addSubmittedFlag } from '../../../_store/actions/game.actions';
// // @ts-ignore
// import failImg from '../Fail/loose.svg';


function AddTopic(props:any) {
  const { handleAddTopic, name } = props;

  const [inputs, setInputs] = useState<any | object | any>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target as HTMLInputElement;
    const { value } = event.target as HTMLInputElement;
    setInputs((values: object) => ({
      ...values,
      [name]: value
    }));
  }

  return (
    <form id='user-settings' className='user-settings__settings' onSubmit={handleAddTopic}>
      <TextField
        style={{
          width: '200px',
          margin: '5px'
        }}
        type='text'
        label={name}
        name={name}
        variant='outlined'
        value={inputs[name] || ''}
        onChange={handleChange}
        // key={index}
      />
      <Input type={'submit'} inputValue={'Добавить'} />
    </form>
  );
}
export default AddTopic;
