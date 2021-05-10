import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../Logo';
import styles from '../../styles/Header.module.css';
import DownloadApp from '../Button/DownloadApp';

const Header = () => {
    return (
        <Container className={styles.header} fluid>
            <Row>
                <Col className='d-flex justify-content-between' lg={12} sm={12}>
                    <Container
                        as='nav'
                        className={`px-lg-5 px-0 ${styles.nav}`}
                        fluid
                    >
                        <Logo />
                        {/* <DownloadApp /> */}
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
