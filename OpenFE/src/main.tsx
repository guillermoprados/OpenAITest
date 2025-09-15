import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { OpenAITestApp } from './OpenAITestApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpenAITestApp />
  </StrictMode>
);
