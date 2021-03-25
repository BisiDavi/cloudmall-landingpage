import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo";
import styles from "../../styles/Header.module.css";

const Header = () => {
    const menuLinks = [
        {
            name: "Download CloudMall App",
            external: true,
            link: process.env.NEXT_PUBLIC_GOOGLE_LINK,
        },
        { name: "About Us", link: "#about-us" },
        { name: "FAQs", link: "#faqs" },
    ];

    const displayMenu = () => (
        <ul>
            {menuLinks.map(({ link, name, external }) =>
                external ? (
                    <li key={name} className="link">
                        <a target="_blank" href={link}>
                            {name}
                        </a>
                    </li>
                ) : (
                    <li key={name} className="link">
                        <Link href={link} passHref>
                            <a>{name}</a>
                        </Link>
                    </li>
                )
            )}
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
                    li:first-child:hover {
                        opacity: 0.5;
                    }
                    li:first-child:hover a {
                        color: white;
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
