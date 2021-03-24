import React from "react";
import { Col, Row } from "react-bootstrap";
import { AppstoreButton, PlaystoreButton } from "../Button";
import TypewriterEffect from "../Typewriter";

const MainBanner = () => {
    return (
        <Row>
            <Col className="text mt-5" lg={7} xs={12}>
                <h1>
                    Get Your Delivery in less than <span>1</span> hour
                </h1>
                <TypewriterEffect />
                <h4>Order your Pasteries | Groceries | Raw Food</h4>

                <div className="download-cloudmall">
                    <AppstoreButton />
                    <PlaystoreButton />
                </div>
            </Col>
            <Col className="cloudmall-animation" lg={5} xs={12}></Col>
            <style jsx>
                {`
                    h1 {
                        font-size: 30px;
                        margin: 20px 0px;
                    }
                    h4 {
                        margin: 20px 0px;
                    }
                    .download-cloudmall {
                        display: flex;
                        justify-content: space-between;
                        width: 300px;
                        margin: 40px 0px;
                    }
                    span {
                        color: orange;
                        font-weight: bold;
                    }
                `}
            </style>
        </Row>
    );
};

export default MainBanner;
