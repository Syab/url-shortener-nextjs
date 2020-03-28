import React, { Fragment, useEffect, Component } from 'react';
import Head from 'next/head';
// import {Container} from "next/app";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/utils/theme';

const MyApp = props => {

    const { Component, pageProps } = props;

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    });

    return (
        <Fragment>
            <Head>
            <title>URL Shortener Project</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                    </Head>
                    <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    {/*<SnackbarProvider>*/}
                    <Component {...pageProps} />
            </ThemeProvider>
        </Fragment>
);

};

export default MyApp;


