import { createTypedAction } from 'redux-actions-ts';
import { IAbbyy } from '../../utils/getRandomWord';

export const addGameWord = createTypedAction<IAbbyy>('[Success] addGameWord');

export const addGameLetter = createTypedAction<string>('[Success] addGameLetter');
