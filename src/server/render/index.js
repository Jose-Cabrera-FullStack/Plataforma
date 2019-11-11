import getManifest from '../getManifest';

const isProd = process.env.NODE_ENV === 'production';

const files = getManifest();

const render = (html,preloadedState) => {
    return(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Summoner's Cave</title>
            <link rel="stylesheet" href="${isProd ? files['main.css']:'./assets/app.css'}" type="text/css"></link>
          </head>
          <body>
            <div id="app">${html}</div>
            <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
            <script src="${isProd ? files['main.js']:'./assets/app.js'}" type="text/javascript"></script>
            <script src="${isProd ? files['vendor.css']:'./assets/vendor.js'}" type="text/javascript"></script>
          </body>
        </html>
    `)
}

export default render;