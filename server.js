
require('@babel/register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { HelmetProvider } = require('react-helmet-async');
const App = require('./App').default;

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const helmetContext = {};
  const appMarkup = ReactDOMServer.renderToString(
    React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(App)
    )
  );

  const { helmet } = helmetContext;

  const helmetHead = helmet.htmlAttributes.toString() +
    helmet.title.toString() +
    helmet.meta.toString() +
    helmet.link.toString() +
    helmet.script.toString();

  res.send(`
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmetHead}
      </head>
      <body>
        <div id="app">${appMarkup}</div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
