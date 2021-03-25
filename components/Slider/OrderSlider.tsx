import React, { useRef, useState, FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/OrderSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OrderSlider: FC = (): JSX.Element => {
    const [sliderState, setSliderState] = useState(true);
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2500,
    };
    const play = () => {
        sliderRef.current.slickPlay();
        setSliderState(false);
    };

    const pause = () => {
        sliderRef.current.slickPause();
        setSliderState(true);
    };

    const sliderArr = [
        "/appBanner.webp",
        "/appBanner2.webp",
        "/appBanner3.webp",
        "/appBanner4.webp",
        "/appBanner5.webp",
        "/appBanner6.webp",
        "/appBanner7.webp",
        "/appBanner8.webp",
    ];

    return (
        <div className="OrderSlider">
            <Slider
                className={`${styles.pageslider} pageslider`}
                {...settings}
                ref={sliderRef}
            >
                {sliderArr.map((slider) => (
                    <div key={slider} className="content">
                        <Image
                            src={slider}
                            className="sliderImg"
                            width={270}
                            height={480}
                        />
                    </div>
                ))}
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
                .OrderSlider {
                    height: 500px;
                    width: 290px;
                    position: relative;
                    border: 10px solid white;
                    border-radius: 0px;
                }
                .content {
                    color: white;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    margin: auto;
                    align-item: center;
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

export default OrderSlider;
