import React from "react";
import { AppstoreButton, PlaystoreButton } from "../Button";
import Logo from "../Logo";
import styles from "../../styles/Footer.module.css";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaMedium,
    FaCopyright,
} from "react-icons/fa";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const cities = ["Lagos", "Ile-Ife"];
    const popularVendors = ["Banwil", "Ace", "Nissi Foods"];
    const SocialIcons = [
        <FaFacebook />,
        <FaInstagram />,
        <FaTwitter />,
        <FaMedium />,
    ];
    const displayList = (listArr) => (
        <ul>
            {listArr.map((list) => (
                <li key={list}>{list}</li>
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
                `}
            </style>
        </ul>
    );

    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <span>
                        <Logo />
                    </span>
                    <div className="btnGrp">
                        <AppstoreButton />
                        <PlaystoreButton />
                    </div>
                </div>
                <div className="col-lg-4">
                    <h1>City</h1>
                    {displayList(cities)}
                </div>
                <div className="col-lg-4">
                    <h1>Popular vendors</h1>
                    {displayList(popularVendors)}
                </div>
            </div>
            <div className="row copyright">
                <div className="col-lg-6 col-xs-12 site-title">
                    <span>
                        <FaCopyright />
                    </span>
                    <p>{currentYear} Cloudmall Africa</p>
                </div>
                <div className={`col-lg-6 col-xs-12 icons ${styles.icons}`}>
                    {displayList(SocialIcons)}
                </div>
            </div>
            <style jsx>{`
                footer {
                    background-color: black;
                    color: white;
                    width: 100%;
                    padding: 70px 50px;
                }
                .btnGrp {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 300px;
                    margin: auto;
                    align-items: center;
                }

                h1 {
                    font-size: 25px;
                }
                .col-lg-4 {
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
            `}</style>
        </footer>
    );
};

export default Footer;
