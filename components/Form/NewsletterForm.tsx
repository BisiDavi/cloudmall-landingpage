import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../../styles/Newsletter.module.css";

const NewsletterForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Form className={styles.newsletterform}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label srOnly>Email Address</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Button onClick={submitHandler} type="submit">
                SUBSCRIBE
            </Button>
        </Form>
    );
};

export default NewsletterForm;
