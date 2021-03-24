import React from "react";
import { Col, Row } from "react-bootstrap";
import { AppstoreButton, PlaystoreButton } from "../Button";

const MainBanner = () => {
    return (
        <Row>
            <Col className="text mt-5" lg={6} xs={12}>
                <h1>
                    Get Your Delivery in less than <span>1</span> hour
                </h1>
                <h4>Order your Pasteries | Groceries | Raw Food</h4>

                <div className="download-cloudmall">
                    <AppstoreButton />
                    <PlaystoreButton />
                </div>
            </Col>
            <Col className="cloudmall-animation" lg={6} xs={12}></Col>
            <style jsx>
                {`
                    .download-cloudmall {
                        display: flex;
                        justify-content: space-between;
                        width: 300px;
                        margin: 20px 0p;
                    }
                `}
            </style>
        </Row>
    );
};

export default MainBanner;
