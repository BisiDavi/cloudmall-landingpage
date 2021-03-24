import Head from "next/head";
import React from "react";

const Pagelayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>
                    CloudMall Africa | ...Your delivery in less than 1 hour
                </title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    );
};

export default Pagelayout;
