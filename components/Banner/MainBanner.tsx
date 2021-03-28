import React from "react";
import { Col, Row } from "react-bootstrap";
import { AppstoreButton, PlaystoreButton } from "../Button";
import TypewriterEffect from "../Typewriter";

const MainBanner = () => {
    return (
        <Row>
            <Col className="text mt-lg-5" lg={12} xs={12}>
                <h1>
                    Get Your Delivery in less than <span>30</span> minutes
                </h1>
                <TypewriterEffect />
                <h4>Order your Pasteries | Groceries | Raw Food</h4>

                <div className="download-cloudmall">
                    <AppstoreButton />
                    <PlaystoreButton />
                </div>
            </Col>
            <style jsx>
                {`
                    .text {
                        color: white;
                    }
                    h1 {
                        font-size: 23px;
                        margin: 20px 0px;
                        color: white;
                        width: 80%;
                        text-align: center;
                        margin: -10px auto 20px auto;
                    }
                    h4 {
                        margin: 10px 0px;
                        font-size: 18px;
                        color: white;
                    }
                    .download-cloudmall {
                        display: flex;
                        justify-content: space-between;
                        width: 300px;
                        margin: 40px auto;
                    }
                    span {
                        color: orange;
                        font-weight: bold;
                        font-size: 27px;
                    }
                    @media (max-width: 768px) {
                        h4 {
                            font-size: 1.5vh;
                            text-align: center;
                        }
                        .download-cloudmall {
                            margin: auto;
                            width: 100%;
                            padding: 0px 20px;
                            height: 50px;
                        }
                        h1 {
                            margin: 0px auto 10px auto;
                            font-size: 16px;
                            padding: 0px;
                        }
                        .download-cloudmall div {
                            height: 40px;
                        }
                        @media (max-width: 500px) {
                            h1 {
                                font-size: 12px;
                                width: 60%;
                                display: flex;
                                align-items: center;
                                height: 20px;
                                margin-bottom: 60px;
                                flex-direction: column;
                            }
                            .text {
                                width: 300px;
                            }
                        }
                    }
                `}
            </style>
        </Row>
    );
};

export default MainBanner;
