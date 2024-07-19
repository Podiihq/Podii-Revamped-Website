// server.js
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';  // Adjust the path if necessary

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', (req, res) => {
  const context = {};
  const helmetContext = {};

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const html = ReactDOMServer.renderToString(app);
  const helmet = helmetContext.helmet;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/js/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
