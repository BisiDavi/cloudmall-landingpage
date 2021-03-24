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
import styles from "../styles/Home.module.css";
import { HomepageSlider } from "../components";

export default function Home() {
    return (
        <Pagelayout>
            <AlertBanner />
            <Header />
            <HomepageSlider />
            <Container as="main">
                <MainBanner />
            </Container>
            <Newsletter />
            <Policy />
        </Pagelayout>
    );
}
