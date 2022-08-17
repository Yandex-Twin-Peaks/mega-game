import axios from 'axios';

const getAuthToken = (req: any, res: any) => {
  console.log(111, req);
  axios.post('https://oauth.yandex.ru/token', {
    'grant_type': 'authorization_code',
    'code': Number(req.query.code)
  })
    .then((yaRes) => {
      console.log(222, yaRes);
      res.send(JSON.stringify(yaRes));
    })
    .catch((err) => console.log(err));

};

export { getAuthToken };
