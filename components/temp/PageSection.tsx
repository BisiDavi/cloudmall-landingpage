import React, { FC } from "react";
import { OrderSlider } from "../Slider";
import DownloadBtn from "./DownloadBtn";
import contents from "./json/content.json";
import styles from "../../styles/PageSection.module.css";

const colorTitle = (word): JSX.Element => {
    if (word !== null && word.match("convenience")) {
        return (
            <h1>
                We bring <span>convenience</span> to your finger tips.
            </h1>
        );
    } else if (word !== null && word.match("favourite local stores")) {
        return (
            <h1>
                Buy easily from your <span>favourite local stores.</span>
            </h1>
        );
    } else if (word !== null && word.match("30 to 45 mins")) {
        return (
            <h1>
                Receive your orders within <span>30 to 45 mins.</span>
            </h1>
        );
    } else if (word !== null && word.match("variety of items")) {
        return (
            <h1>
                Shop for a large <span>variety of items.</span>
            </h1>
        );
    } else if (word !== null && word.match("status update")) {
        return (
            <h1>
                Track your order and get timely <span>status update.</span>
            </h1>
        );
    } else {
        return null;
    }
};

const displaySection = () =>
    contents.map((content, index) => (
        <section key={index} className={`${styles.section} row`}>
            {content.row.map((row, index) => (
                <div className={`col-lg-5 col-12 ${row.className}`} key={index}>
                    {row.type === "slider" && <OrderSlider />}
                    {colorTitle(row.title)}
                    <p>{row.text}</p>
                    <img src={row.image} />
                    {row.downloadBtn && <DownloadBtn />}
                </div>
            ))}
            <style jsx>{`
                section.row {
                    align-items: center;
                    margin: 0px auto;
                    padding: 50px 0px;
                    justify-content: space-around;
                }
                section.row:first-child {
                    padding-top: 120px;
                }
                section.row p {
                    font: normal normal 24px/40px "Roboto";
                    color: #3e4044;
                    margin-top: 24px;
                    margin-bottom: 36px;
                }
                section.row .hasImage {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                section.row:first-child h1 {
                    font-family: "Montserrat", sans-serif;
                    font-weight: bold;
                    font-size: 56px;
                    line-height: 72px;
                    letter-spacing: -0.0025em;
                }
                section.row h1 {
                    font-family: "Montserrat", sans-serif;
                    font-size: 48px;
                    line-height: 64px;
                    font-weight: bold;
                    letter-spacing: -0.0025em;
                }
                @media (max-width: 1024px) {
                    section.row h1 {
                        font-size: 35px;
                        line-height: 50px;
                    }
                    section img {
                        width: 70%;
                    }
                }
                @media (max-width: 768px) {
                    section.row:first-child {
                        padding-top: 5px;
                    }
                    section.row {
                        padding: 50px 15px;
                    }
                    section.row h1 {
                        font-size: 32px;
                        line-height: 48px;
                        color: #3e4044;
                    }
                    section.row:first-child .undefined {
                        margin: 40px 0px;
                    }
                    section.row .hasImage img {
                        width: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .col-12.hasImage {
                        order: 2;
                    }
                }
                @media (max-width: 480px) {
                    section.row:first-child .hasImage img,
                    section.row:nth-child(4) .hasImage img,
                    section.row:nth-child(5) .hasImage img {
                        width: 70%;
                    }

                    section.row h1 {
                        font-size: 32px;
                        line-height: 48px;
                        color: #3e4044;
                    }

                    section.row .hasImage img {
                        width: 100%;
                    }
                    section.row p {
                        font: normal normal 18px/28px "Roboto";
                    }
                    section.row h1 {
                        font-size: 25px;
                    }
                }
            `}</style>
        </section>
    ));

const PageSection: FC = (): JSX.Element => {
    return <>{displaySection()}</>;
};

export default PageSection;
