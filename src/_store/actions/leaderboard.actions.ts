import { createTypedAction } from 'redux-actions-ts';
import { IAddLeaderboardRequest, IGetLeaderboardRequest } from '../types/leaderboard.types';

export const getLeaderboardPending = createTypedAction<IGetLeaderboardRequest>('[Pending] Получить leaderboard');
export const getLeaderboardSuccess = createTypedAction<any>('[Success] Получить leaderboard');

export const postLeaderboardPending = createTypedAction<IAddLeaderboardRequest>('[Pending] Добавить данные в leaderboard');
export const postLeaderboardSuccess = createTypedAction<void>('[Success] Добавить данные в leaderboard');
