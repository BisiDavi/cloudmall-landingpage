import React from "react";
import { Col, Row } from "react-bootstrap";

const MainBanner = () => {
    return (
        <Row>
            <Col className="text" lg={6} xs={12}>
                <h1>Get Your Delivery in less than <span>1</span> hour</h1>
                <h4>Order your Pasteries | Groceries | Raw Food</h4>
            </Col>
            <Col className="cloudmall-animation" lg={6} xs={12}></Col>
        </Row>
    );
};

export default MainBanner;
