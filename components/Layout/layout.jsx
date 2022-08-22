import Head from 'next/head';
import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Header />
                <main className="">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
