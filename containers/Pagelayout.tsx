import React from "react";
import Head from "next/head";
import { AlertBanner, Policy } from "../components/Banner";
import { Header, Footer } from "../components";
import { useModal } from "../hooks";
import PageModal from "../components/Modal";

const Pagelayout = ({ children, title }) => {
    const { show, handleClose, handleShow } = useModal();
    return (
        <div className="pagelayout">
            <Head>
                <title>CloudMall Africa | {title}</title>
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
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <AlertBanner />
            <Header />
            {children}
            <Policy showModal={handleShow} />
            <PageModal show={show} onClose={handleClose} />
            <Footer />
            <style jsx>{`
                .pagelayout {
                    position: relative;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Pagelayout;
