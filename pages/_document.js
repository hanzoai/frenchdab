import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'

import { OG, TWITTER, FONT_STYLESHEETS, FB_PIXEL, GA_ID } from '../template.settings'
import theme from '../src/theme'

export default class MyDocument extends Document {
  componentDidMount() {
      // https://www.npmjs.com/package/react-facebook-pixel
      // const advancedMatching = { em: 'some@email.com' } // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
      const options = {
        autoConfig: true, 	// set pixel's autoConfig
        debug: false, 		// enable logs
      }
      ReactPixel.init(FB_PIXEL, options)

      ReactPixel.pageView()					// For tracking page view
      // ReactPixel.track( event, data ) 		// For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
      // ReactPixel.trackCustom( event, data ) 	// For tracking custom events

      // https://github.com/react-ga/react-ga
      ReactGA.initialize(GA_ID);

      ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          
          {/*
            manifest.json provides metadata used when your web app is added to the
            homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
          */}
          {/*
            To generate your icons visit https://www.favicon-generator.org/
            Download their file and extract it into "public/icons"
            You do not need to change the icon names, they will auto import appropriately
          */}
          <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/icons/manifest.json" />
          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
          <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
          {/* sharing meta: fb opengraph */}
          <meta property="og:title" content={OG.TITLE} />
          <meta property="og:description" content={OG.DESCRIPTION} />
          <meta property="og:image" content={OG.IMAGE} />
          <meta property="og:url" content={OG.URL} />
          <meta property="og:type" content={OG.TYPE} />
          {/* sharing meta: twitter card */}
          <meta name="twitter:title" content={TWITTER.TITLE} />
          <meta name="twitter:description" content={TWITTER.DESCRIPTION} />
          <meta name="twitter:image" content={TWITTER.IMAGE} />
          <meta name="twitter:card" content={TWITTER.CARD} />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          { FONT_STYLESHEETS.map((s, i) => <link key={`ss_${i}`} rel='stylesheet' href={s} />) }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}