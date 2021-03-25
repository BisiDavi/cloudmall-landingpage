import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NewsletterForm } from "../Form";
import styles from "../../styles/Newsletter.module.css";

const Newsletter = () => {
    return (
        <Container className={styles.newsletter} fluid>
            <Row>
                <Col lg={6} xs={12} className={styles.newslettertext}>
                    <h3>Subscribe to our newsletter today!</h3>
                    <p>
                        Don't miss out on our great offers & Receive deals
                        discount from all our top vendors via e-mail
                    </p>
                </Col>
                <Col className={styles.newslettersubscribe} lg={6} xs={12}>
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
                    `}
                </style>
            </Row>
        </Container>
    );
};

export default Newsletter;
