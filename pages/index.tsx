import React from "react";
import Pagelayout from "../containers/Pagelayout";
import {
    AlertBanner,
    InfoBanner,
    Newsletter,
    OrderBanner,
    Policy,
} from "../components/Banner";
import { Header } from "../components/Header";
import { MainSlider } from "../components";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <Pagelayout>
           
            <OrderBanner />
            <MainSlider />
            <InfoBanner />
            <Newsletter />
            <Policy />
            <Footer />
        </Pagelayout>
    );
}
