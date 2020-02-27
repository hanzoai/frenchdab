import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import CookieConsent, { Cookies } from "react-cookie-consent"

import {
  Provider,
} from 'mobx-react'

import theme from '../src/theme'
import { TITLE } from '../template.settings'

import { ParallaxProvider } from 'react-scroll-parallax'
import {
  StoreProvider,
  initStore,
} from '../store'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store (nextJS DOCS)
    //

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx })
    }

    return {
      pageProps,
    }
  }

  render() {
    const { Component, pageProps } = this.props
    const store = initStore()

    return (
      <>
        <Head>
          <title>{TITLE}</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <StoreProvider>
              <Component {...pageProps} />
              {/* <CookieConsent>
                This website uses cookies to enhance the user experience.
              </CookieConsent> */}
            </StoreProvider>
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}