import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import '@radix-ui/themes/styles.css'; // JV: Importing Radix CSS file
import { Theme } from '@radix-ui/themes'; // JV: Importing the Theme component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme> {/* JV: Adding the Radix Theme component */}
      <App />
    </Theme>
  </React.StrictMode>,
);