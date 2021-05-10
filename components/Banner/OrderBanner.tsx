import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { OrderSlider } from '../Slider';
import styles from '../../styles/Orderbanner.module.css';
import DownloadApp from '../Button/DownloadApp';

const OrderBanner = () => {
    return (
        <Container className={styles.orderbanner} fluid>
            <Row>
                <Col className={styles.column1} lg={7} sm={12}>
                    <h1>
                        We bring your <span>favourite local stores </span> to
                        your finger tips.
                    </h1>
                    <p>
                        Order for your friends, colleagues and get it delivered
                        quickly
                    </p>
                    {/* <DownloadApp /> */}
                </Col>
                <Col className={styles.column2} lg={5}>
                    <OrderSlider />
                </Col>
            </Row>
        </Container>
    );
};

export default OrderBanner;
