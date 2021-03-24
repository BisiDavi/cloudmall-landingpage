import React from "react";
import Pagelayout from "../containers/Pagelayout";
import {
    AlertBanner,
    MainBanner,
    Newsletter,
    Policy,
} from "../components/Banner";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <Pagelayout>
            <AlertBanner />
            <Header />
            <Container as="main">
                <MainBanner />
            </Container>
            <Newsletter />
            <Policy />
        </Pagelayout>
    );
}
