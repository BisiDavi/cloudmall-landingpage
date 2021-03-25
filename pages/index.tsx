import React from "react";
import { Container } from "react-bootstrap";
import Pagelayout from "../containers/Pagelayout";
import styles from "../styles/Home.module.css";
import {
    AlertBanner,
    InfoBanner,
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
            <InfoBanner />
            <Newsletter />
            <Policy />
        </Pagelayout>
    );
}
