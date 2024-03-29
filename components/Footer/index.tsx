import React from 'react';
import Link from 'next/link';
import { AppstoreButton, PlaystoreButton } from '../Button';
import { v4 as uuidv4 } from 'uuid';
import Logo from '../Logo';
import styles from '../../styles/Footer.module.css';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaMedium,
    FaCopyright,
} from 'react-icons/fa';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const cities = ['Lagos', 'Ile-Ife'];
    const popularVendors = ['Banwil', 'Ace', 'Nissi Foods'];
    const SocialIcons = [
        {
            icon: <FaFacebook />,
            link: 'https://m.facebook.com/cloudmallafrica/',
        },
        {
            icon: <FaInstagram />,
            link: 'https://instagram.com/cloudmallafrica',
        },
        { icon: <FaTwitter />, link: 'https://twitter.com/cloudmallafrica' },
        { icon: <FaMedium />, link: 'https://link.medium.com/Z8cgBNZ5mfb' },
    ];
    const displayList = (listArr) => (
        <ul>
            {listArr.map((list) => (
                <li key={uuidv4()}>{list}</li>
            ))}
            <style jsx>
                {`
                    ul {
                        padding: 0px;
                        margin-top: 20px;
                    }
                    li {
                        list-style: none;
                        font-weight: bold;
                        font-size: 20px;
                    }
                    @media (max-width: 768px) {
                        ul {
                            padding: 0;
                            margin-top: 0px;
                        }
                        ul li {
                            list-style: none;
                            font-size: 15px;
                            font-weight: normal;
                        }
                    }
                `}
            </style>
        </ul>
    );
    const displaySocalLink = () => (
        <ul>
            {SocialIcons.map((link, index) => (
                <li key={index}>
                    <a
                        rel='noopener noreferrer'
                        target='_blank'
                        href={link.link}
                    >
                        {link.icon}
                    </a>
                </li>
            ))}
            <style jsx>
                {`
                    a {
                        text-decoration: none;
                        font-size: 1em;
                    }
                    a:hover {
                        color: red;
                    }
                    ul {
                        padding: 0px;
                        margin-top: 20px;
                    }
                    li {
                        list-style: none;
                        font-weight: bold;
                        font-size: 20px;
                    }
                    @media (max-width: 768px) {
                        ul {
                            padding: 0;
                            margin-top: 0px;
                        }
                        ul li {
                            list-style: none;
                            font-size: 15px;
                            font-weight: normal;
                        }
                    }
                `}
            </style>
        </ul>
    );
    return (
        <footer className='container-fluid'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <div className='row footer-logo'>
                        <span className='footer-logo'>
                            <Logo />
                        </span>
                        <Link href='/terms-and-conditions' passHref>
                            <a>Our Terms & Conditions</a>
                        </Link>
                        <Link href='/privacy-policies' passHref>
                            <a>Our Privacy Policies</a>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-4 col-6'>
                    <div className='row list'>
                        <h1>City</h1>
                        {displayList(cities)}
                    </div>
                </div>
                <div className='col-lg-4 col-6'>
                    <div className='row list'>
                        <h1>Popular vendors</h1>
                        {displayList(popularVendors)}
                    </div>
                </div>
            </div>
            <div className='row copyright'>
                <div className='col-lg-6 col-sm-12 site-title'>
                    <span>
                        <FaCopyright />
                    </span>
                    <p>{currentYear} Africa Technological Innovation Systems </p>
                </div>
                <div className={`col-lg-6 col-sm-12 icons ${styles.icons}`}>
                    <div className='row'>{displaySocalLink()}</div>
                </div>
            </div>
            <style jsx>{`
                footer {
                    background-color: black;
                    color: white;
                    width: 100%;
                    padding: 70px 50px;
                }
                .footer-logo {
                    margin-bottom: 10px;
                }
                .btnGrp {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 300px;
                    margin: auto;
                    align-items: center;
                }
                .row.footer-logo a {
                    margin: 3px 10px;
                    font-weight: bold;
                    color: white;
                    font-size: 20px;
                }
                .row.footer-logo a:hover {
                    text-decoration: none;
                    color: red;
                }
                h1 {
                    font-size: 25px;
                }
                .col-lg-4 col-sm-12 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: auto;
                }
                .copyright {
                    margin-top: 50px;
                    align-items: center;
                }
                .icons {
                    display: flex;
                    justify-content: flex-end;
                }
                .icons ul {
                    display: flex;
                }
                .icons li {
                    margin: 0px 20px;
                }
                .site-title {
                    display: flex;
                    align-items: center;
                }
                .site-title p {
                    margin: 0px 20px;
                }
                .list {
                    flex-direction: column;
                }
                .footer-logo {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .footer-logo div {
                    margin: 0;
                }
                @media (max-width: 768px) {
                    .site-title {
                        justify-content: center;
                    }
                    .copyright {
                        margin-top: 0px;
                    }
                    h1 {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    footer.container-fluid {
                        padding: 0px;
                    }
                    footer.container-fluid .row {
                        padding: 10px 20px;
                    }
                    .col-6 .row {
                        flex-direction: column;
                    }
                    .icons {
                        justify-content: center;
                    }
                    footer .btnGrp {
                        width: 100%;
                    }
                }
                @media (max-width: 450px) {
                    .row.footer-logo a {
                        font-size: 16px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
