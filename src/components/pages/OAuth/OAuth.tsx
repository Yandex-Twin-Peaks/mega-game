import React, { useEffect } from 'react';
import axios from 'axios';
import { API_HOST } from '../../../api/constants';

function getOAuthInfo() {
  useEffect(() => {
    const code = (/code=(\d+)/g.exec(window.location.search))?.[1];
    console.log('getAuthInfo code:', code);
    axios.post(API_HOST + '/oauth/yandex', {
      'grant_type': 'authorization_code',
      code,
      'redirect_uri': 'https://twinpeaks14.ya-praktikum.tech/oauth'
    })
      .then((answer) => {
        console.log(answer);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>getAuthInfo</div>
  );
}

export default getOAuthInfo;
