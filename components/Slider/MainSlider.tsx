import React, { FC } from "react";
import { Slider1 } from "../index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainBanner } from "../Banner";
import styles from "../../styles/MainSlider.module.css";

const MainSlider: FC = (): JSX.Element => {
    return (
        <div className={styles.mainSlider}>
            <span className={styles.sliderText}>
                <div className={styles.mainbanner}>
                    <MainBanner />
                </div>
            </span>

            <Slider1 />
        </div>
    );
};

export default MainSlider;
