import React from "react";
import Pagelayout from "../containers/Pagelayout";
import { InfoBanner, Newsletter, OrderBanner } from "../components/Banner";
import { MainSlider } from "../components";

export default function Home() {
    return (
        <Pagelayout>
            <OrderBanner />
            <MainSlider />
            <InfoBanner />
            <Newsletter />
        </Pagelayout>
    );
}
