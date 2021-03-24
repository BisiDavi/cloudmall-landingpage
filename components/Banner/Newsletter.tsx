import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NewsletterForm } from "../Form";
import styles from "../../styles/Newsletter.module.css";

const Newsletter = () => {
    return (
        <Container className={styles.newsletter} fluid>
            <Row>
                <Col lg={6} xs={12}>
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
            </Row>
        </Container>
    );
};

export default Newsletter;
