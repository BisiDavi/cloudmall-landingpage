import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo";
import styles from "../../styles/Header.module.css";

const Header = () => {
    const menuLinks = ["Help", "Get Started"];

    const displayMenu = () => (
        <ul>
            {menuLinks.map((link) => (
                <li key={link} className="link">
                    {link}
                </li>
            ))}
            <style jsx>
                {`
                    .link {
                        list-style: none;
                        text-decoration: none;
                        margin: 5px 20px;
                    }
                    ul {
                        display: flex;
                        justify-content: space-between;
                        width: 25%x;
                    }
                `}
            </style>
        </ul>
    );

    return (
        <Container className={styles.header} fluid>
            <Row>
                <Col className="d-flex justify-content-between" lg={12} sm={12}>
                    <Container as="nav" className={styles.nav}>
                        <Logo />
                        {displayMenu()}
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
