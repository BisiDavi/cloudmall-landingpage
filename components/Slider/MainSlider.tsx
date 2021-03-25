import React, { useRef, useState, FC } from "react";
import Slider from "react-slick";
import { Slider1, Slider2 } from "../index";
import styles from "../../styles/MainSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainBanner } from "../Banner";

const MainSlider: FC = (): JSX.Element => {
    const [sliderState, setSliderState] = useState(true);
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
    };
    const play = () => {
        sliderRef.current.slickPlay();
        setSliderState(false);
    };

    const pause = () => {
        sliderRef.current.slickPause();
        setSliderState(true);
    };

    return (
        <div className={styles.mainSlider}>
            <span className={styles.sliderText}>
                <div className={styles.mainbanner}>
                    <MainBanner />
                </div>
            </span>
            <Slider
                className={`${styles.pageslider} pageslider`}
                {...settings}
                ref={sliderRef}
            >
                <Slider1 />

                <Slider2 />
            </Slider>
            <div className="btnGrp">
                <div className="slider-control">
                    {sliderState ? (
                        <button className="button" onClick={play}>
                            <i className="far fa-play-circle"></i>
                        </button>
                    ) : (
                        <button className="button" onClick={pause}>
                            <i className="far fa-pause-circle"></i>
                        </button>
                    )}
                </div>
            </div>
            <style jsx>{`
                .slider {
                    width: 100%;
                }
                .content {
                    color: white;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    margin: auto;
                    align-item: center;
                    background-color: #ffa5c8;
                }
                .content.slider {
                    position: relative;
                }
                .slider-img {
                    position: relative;
                }
                .gif {
                    height: 400px;
                    width: 400px;
                    position: absolute;
                    top: 260px;
                    left: 140px;
                    border: 16px solid white;
                    z-index: 1000;
                }
                .slider-control {
                    background: rgba(0, 0, 0, 0.3);
                    margin: auto;
                    border-radius: 50%;
                    height: 40px;
                    width: 40px;
                }
                .slider-control button:hover {
                    color: white;
                }
                .btnGrp {
                    bottom: 10px;
                    z-index: 1000;
                    margin: auto;
                    position: absolute;
                    width: 100%;
                    display: flex;
                    margin: auto;
                }
                .h3 {
                    text-align: center;
                }
                .slider-control button {
                    background: transparent;
                    margin: 0px 8px;
                    color: #ffa5c8;
                    border: none;
                    font-size: 25px;
                    cursor: pointer;
                }
                .slider-control button:focus {
                    outline: none;
                }
                .slider-control button:hover {
                    opacity: 0.5;
                }
                @media (max-width: 768px) {
                    .gif {
                        top: 27%;
                        left: 10%;
                        width: 90px;
                        border: 5px solid white;
                        height: 90px;
                    }
                    .slider-control {
                        margin-right: 25%;
                        height: 25px;
                        padding: 0px;
                        width: 25px;
                        margin-bottom: -10px;
                        position: relative;
                    }
                    .slider-control button {
                        height: 20px;
                        width: 20px;
                    }
                    .btnGrp .slider-control button {
                        top: 1px;
                        margin: 0px;
                        left: 3px;
                        padding: 0px;
                        position: absolute;
                    }
                    .btnGrp .slider-control button i {
                        font-size: 20px;
                        position: absolute;
                        top: 2px;
                        left: -1px;
                        z-index: 1000;
                    }
                }
            `}</style>
        </div>
    );
};

export default MainSlider;
