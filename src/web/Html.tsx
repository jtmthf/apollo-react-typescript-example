import * as Helmet from "react-helmet";

interface HtmlProps {
  content: string;
  state: any;
  assets?: any;
}

const Html = ({assets, content, state}: HtmlProps) => {
  const head = Helmet.rewind();

  return (
    <html lang="en-us">
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {Object.keys(assets.styles).map((style, key) =>
          <link href={assets.styles[style]} key={key} media="screen, projection"
                rel="stylesheet" type="text/css" charSet="UTF-8"/>
        )}
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
        <script
          dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};` }}
          charSet="UTF-8"
        />
        <script src={assets.javascript.main} charSet="UTF-8"/>
      </body>
    </html>
  );
};

export default Html;
