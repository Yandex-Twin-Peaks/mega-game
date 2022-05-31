import React from 'react';
import Main from './Main';
import { createRoot } from 'react-dom/client';

import './styles/index.pcss';
import './styles/normalize.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Main />);
