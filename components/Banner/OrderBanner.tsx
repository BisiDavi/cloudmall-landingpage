import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Image from "next/image";
import { OrderSlider } from "../Slider";
import styles from "../../styles/Orderbanner.module.css";

const OrderBanner = () => {
    return (
        <Container className={styles.orderbanner} fluid>
            <Row>
                <Col className={styles.column1} lg={7} sm={12}>
                    <h1>
                        We bring your favourite local store to your finger tip
                    </h1>
                    <p>
                        Order for your friends, colleagues and get it delivered
                        quickly
                    </p>

                    <div className={styles.btnGrp}>
                        <a>
                            <Button>
                                <Image
                                    src="/appstore.svg"
                                    height={80}
                                    width={140}
                                />
                            </Button>
                        </a>
                        <a
                            target="_blank"
                            href={process.env.NEXT_PUBLIC_GOOGLE_LINK}
                        >
                            <Button>
                                <Image
                                    src="/playstore.svg"
                                    height={80}
                                    width={140}
                                />
                            </Button>
                        </a>
                    </div>
                </Col>
                <Col className={styles.column2} lg={5}>
                    <OrderSlider />
                </Col>
            </Row>
        </Container>
    );
};

export default OrderBanner;
