import React, { Fragment, useEffect } from 'react'
import { GlobalStyle } from '../static/style/GlobalStyle';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import { ThemeProvider } from 'src/contexts'

export default function App({ Component, pageProps }) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);


    return (
        <Fragment>
            <Head>
                <title>CavidMalikli</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <GlobalStyle />
            <ThemeProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Fragment>

    )
}