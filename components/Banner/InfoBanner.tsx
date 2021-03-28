import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/InfoBanner.module.css";

const InfoBanner = () => {
    const procedureArr = [
        {
            icon: "/delivery.svg",
            title: "Set your delivery address",
            text: "Choose your present location, for delivery purpose.",
        },
        {
            icon: "/product.svg",
            title: "Order the Product",
            text: "Browse stores for your desired products and order",
        },
        {
            icon: "/bike.svg",
            title: "Doorstep Delivery",
            text: "Get your order",
        },
    ];
    return (
        <Container className={`p-lg-5 p-3 ${styles.banner}`} fluid>
            <Row>
                <Col lg={12} xs={12}>
                    <h1 className="text-center">How it Works</h1>
                </Col>
                {procedureArr.map((procedure, index) => (
                    <Col
                        key={index}
                        className={styles.infobanner}
                        lg={4}
                        xs={12}
                    >
                        <Image src={procedure.icon} height={100} width={100} />
                        <h4>{procedure.title}</h4>
                        <p>{procedure.text}</p>
                    </Col>
                ))}

                <style jsx>{`
                    @media (max-width: 768px) {
                        h1.text-center {
                            font-size: 25px;
                        }
                    }
                `}</style>
            </Row>
        </Container>
    );
};

export default InfoBanner;
