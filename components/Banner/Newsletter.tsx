import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NewsletterForm } from "../Form";
import styles from "../../styles/Newsletter.module.css";

const Newsletter = () => {
    return (
        <Container className={styles.newsletter} fluid>
            <Row className={styles.newsletterRow}>
                <Col
                    lg={6}
                    xs={12}
                    className={`newslettertext ${styles.newslettertext}`}
                >
                    <h3>Subscribe to our newsletter today!</h3>
                    <p>
                        Don't miss out on our great offers & Receive deals
                        discount from all our top vendors via e-mail
                    </p>
                </Col>
                <Col
                    className={`newslettersubscribe ${styles.newslettersubscribe}`}
                    lg={6}
                    xs={12}
                >
                    <Row className={styles.overlay}></Row>
                    <NewsletterForm />
                </Col>
                <style jsx>
                    {`
                        h3 {
                            font-weight: bold;
                            font-size: 40px;
                        }
                        p {
                            font-size: 20px;
                        }
                        @media (max-width: 768px) {
                            .newslettertext {
                                padding: 20px 10px 0px 0px;
                            }
                            .newslettersubscribe {
                                margin: 0px;
                                height: 100%;
                                padding: 20px 0;
                                width: 100%;
                            }
                        }
                        @media (max-width: 768px) {
                            h3 {
                                font-size: 25px;
                                margin-top: 15px;
                            }
                            p {
                                font-size: 15px;
                            }
                        }
                    `}
                </style>
            </Row>
        </Container>
    );
};

export default Newsletter;
