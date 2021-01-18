import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/icons/favicon.ico" />
                    {/* <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/icons/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/icons/safari-pinned-tab.svg"
                        color="#0041ab"
                    /> */}
                    <meta name="msapplication-TileColor" content="#0041ab" />
                    <meta name="theme-color" content="#0041ab" />

                    <meta name="description" content="Blog" />
                    <meta name="keywords" content="Cavid Malikli,cavid,Malikli,Blog,Cavidmalikli" />
                    <meta name="robots" content="index" />
                    <meta httpEquiv="Content-Type" content="text/html" />
                    <meta name="language" content="Az" />
                    <meta property="og:locale" content="az_AZ" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Cavid Malikli" />
                    <meta property="og:description" content="cavid Malikli Blog" />
                    <meta name="theme-color" content="#0047BA" />

                    {/* <link
                        rel="preload"
                        href="/fonts/SanFrancisco.woff2"
                        as="font"
                        crossOrigin="anonymous"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
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
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};