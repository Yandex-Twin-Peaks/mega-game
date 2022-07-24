import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import {
  API_HOST, paths, TEAM_NAME
} from '../../api/constants';
import { IAddLeaderboardRequest, IGetLeaderboardRequest } from '../types/leaderboard.types';

const axiosConfig = { withCredentials: true };

/** POST Запрос на получение данных из лидерборда */
export const sendLeaderboardDataRequest = (payload: IGetLeaderboardRequest): Observable<any> => {
  return Axios.post(
    `${API_HOST}${paths.LEADERBOARD}${TEAM_NAME}`,
    payload,
    axiosConfig
  ).pipe(map(({ data }: AxiosResponse<IGetLeaderboardRequest>) => data));
};


/** POST Запрос на отправку данных в лидерборд */
export const sendAddDataLeaderboardRequest = (payload: IAddLeaderboardRequest): Observable<any> => {
  return Axios.post(
    `${API_HOST}${paths.LEADERBOARD}`,
    payload,
    axiosConfig
  ).pipe(map(({ data }: AxiosResponse<void>) => data));
};
