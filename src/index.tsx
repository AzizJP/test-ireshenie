import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './components/App/App';

import './index.scss';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
