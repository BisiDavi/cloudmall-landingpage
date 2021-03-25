import React from "react";
import { Container } from "react-bootstrap";
import Pagelayout from "../containers/Pagelayout";
import {
    AlertBanner,
    MainBanner,
    Newsletter,
    Policy,
} from "../components/Banner";
import { Header } from "../components/Header";
import { MainSlider } from "../components";

export default function Home() {
    return (
        <Pagelayout>
            <AlertBanner />
            <Header />
            <MainSlider />
            <Container as="main">
                <MainBanner />
            </Container>
            <Newsletter />
            <Policy />
        </Pagelayout>
    );
}
