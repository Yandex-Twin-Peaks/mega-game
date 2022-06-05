import React from 'react';
import { createRoot } from 'react-dom/client';

import Main from './Main';

import './styles/index.pcss';
import './styles/normalize.css';

const container = document.getElementById('root')!;

const root = createRoot(container);
root.render(<Main />);
