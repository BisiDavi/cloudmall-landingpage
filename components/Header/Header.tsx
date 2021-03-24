import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo";
import styles from "../../styles/Header.module.css";

const Header = () => {
    const menuLinks = [
        { name: "Download CloudMall App", link: "#downloadApp" },
        { name: "About Us", link: "#about-us" },
        { name: "FAQs", link: "#faqs" },
    ];

    const displayMenu = () => (
        <ul>
            {menuLinks.map((link) => (
                <li key={link.name} className="link">
                    <Link href={link.link} passHref>
                        <a>{link.name}</a>
                    </Link>
                </li>
            ))}
            <style jsx>
                {`
                    a {
                        color: black;
                        text-decoration: none;
                    }
                    .link {
                        list-style: none;
                        text-decoration: none;
                        margin: 0px 20px;
                    }
                    li:first-child {
                        background-color: orange;
                        border-radius: 10px;
                        color: white;
                        font-weight: bold;
                        padding: 5px 10px;
                        cursor: pointer;
                        margin-top: 0px;
                    }
                    ul {
                        display: flex;
                        justify-content: space-between;
                        width: 25%x;
                        align-items: center;
                        margin: 0px;
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
