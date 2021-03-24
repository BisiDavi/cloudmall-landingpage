import React from "react";
import Pagelayout from "../containers/Pagelayout";
import { AlertBanner } from "../components/Banner";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Pagelayout>
            <AlertBanner />
            <Header />
        </Pagelayout>
    );
}
