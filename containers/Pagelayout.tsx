import Head from "next/head";
import React from "react";

const Pagelayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>
                    CloudMall Africa | ...Your delivery in less than 1 hour
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    );
};

export default Pagelayout;
