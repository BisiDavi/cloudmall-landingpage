import React, { FC } from "react";
import { OrderSlider } from "../Slider";
import DownloadBtn from "./DownloadBtn";
import contents from "./json/content.json";

const displaySection = () =>
    contents.map((content, index) => (
        <section key={index} className="row">
            {content.row.map((row, index) => (
                <div className={`col-lg-6 col-12 ${row.className}`} key={index}>
                    {row.type === "slider" && <OrderSlider />}
                    <h1>{row.title}</h1>
                    <p>{row.text}</p>
                    <img src={row.image} />
                    {row.downloadBtn && <DownloadBtn />}
                </div>
            ))}
            <style jsx>{`
                section.row {
                    align-items: center;
                    margin: 30px auto;
                }
                section.row p {
                    font: normal normal 24px/36px "Roboto";
                }
                section.row .hasImage {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                section.row h1 {
                    font-family: "Montserrat", sans-serif;
                    font-weight: bold;
                    font-size: 3.5rem;
                    line-height: 72px;
                    letter-spacing: -0.0025em;
                }
                @media (max-width: 768px) {
                    section.row h1 {
                        font-size: 30px;
                        line-height: 35px;
                    }
                    section.row .hasImage img {
                        width: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                @media (max-width: 480px) {
                    section.row img {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    ));

const PageSection: FC = (): JSX.Element => {
    return <>{displaySection()}</>;
};
export default PageSection;