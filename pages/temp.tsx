import React from "react";
import Header from "../components/temp/Header";
import PageSection from "../components/temp/PageSection";
import { Container } from "react-bootstrap";
import Footer from "../components/temp/Footer";

const Temp = () => {
    return (
        <>
            <Header />
            <Container className="px-5" fluid>
                <PageSection />
                <Footer />
            </Container>
        </>
    );
};

export default Temp;
