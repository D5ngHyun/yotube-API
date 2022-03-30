import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  // <React.StrictMode>
  <App youtube={youtube} />
  // </React.StrictMode>
);
