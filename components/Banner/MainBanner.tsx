import React from "react";
import { Col, Row } from "react-bootstrap";
import { AppstoreButton, PlaystoreButton } from "../Button";
import TypewriterEffect from "../Typewriter";

const MainBanner = () => {
    return (
        <Row>
            <Col className="text mt-5" lg={12} xs={12}>
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
                        margin: 20px 0px;
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
                `}
            </style>
        </Row>
    );
};

export default MainBanner;
