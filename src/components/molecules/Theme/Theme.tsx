
import React from 'react';
import './Theme.pcss';

function handleTheme() {
  console.log('тема изменена');
}


function Theme() {


  return <button onClick={handleTheme}>☼☀</button>;
}

export default Theme;
