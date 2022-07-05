import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import Main from './Main';

import './styles/index.pcss';
import './styles/normalize.css';

const container = document.getElementById('root')!;

hydrateRoot(container, <Main />);
