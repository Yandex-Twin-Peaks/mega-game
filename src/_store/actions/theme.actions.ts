import { createTypedAction } from 'redux-actions-ts';
// import { IAddLeaderboardRequest, IGetLeaderboardRequest } from '../types/leaderboard.types';

export const getThemePending = createTypedAction<any>('[Pending] Получить theme');
export const getThemeSuccess = createTypedAction<any>('[Success] Получить theme');

export const putThemePending = createTypedAction<any>('[Pending] Обновить theme');
export const putThemeSuccess = createTypedAction<void>('[Success] Обновить theme');
