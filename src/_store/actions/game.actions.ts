import { createTypedAction } from 'redux-actions-ts';
import { IAbbyy } from '../../utils/getRandomWord';

export const addGameWord = createTypedAction<IAbbyy>('[Success] addGameWord');

export const addGameLetter = createTypedAction<string>('[Success] addGameLetter');

export const addErrorCounter = createTypedAction<string>('[Success] addErrorCounter');

export const addShowText = createTypedAction<string>('[Success] addShowText');

