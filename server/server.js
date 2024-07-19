// server.js
import express from 'express';
import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const app = express();

app.use(('public'));

app.get('*', (req, res) => {
  const helmetContext = {};
  const appString = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;

  res.send(`
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${appString}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
