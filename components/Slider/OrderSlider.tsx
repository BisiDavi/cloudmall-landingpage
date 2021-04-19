import React, { useRef, FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/OrderSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OrderSlider: FC = (): JSX.Element => {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2500,
    };

    const sliderArr = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg",
        "/5.jpg",
        "/6.jpg",
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
                @media (max-width: 768px) and (min-width: 500px) {
                    .OrderSlider {
                        height: 500px;
                        width: 290px;
                        margin-left: 25%;
                    }
                }
                @media (max-width: 480px) {
                    .OrderSlider {
                        margin: 0px 20%;
                        margin-top: -40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default OrderSlider;
