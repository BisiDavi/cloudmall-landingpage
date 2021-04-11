import React from "react";
import Pagelayout from "../containers/Pagelayout";
import { InfoBanner, Newsletter, OrderBanner } from "../components/Banner";
import { MainSlider } from "../components";

export default function Home() {
    return (
        <Pagelayout title="...Your delivery in less than 1 hour">
            <OrderBanner />
            <MainSlider />
            <InfoBanner />
            <Newsletter />
        </Pagelayout>
    );
}
