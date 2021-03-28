import React from "react";
import { AppstoreButton, PlaystoreButton } from "../Button";
import { v4 as uuidv4 } from "uuid";
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

    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="row">
                        <span>
                            <Logo />
                        </span>
                        <div className="btnGrp">
                            <AppstoreButton />
                            <PlaystoreButton />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-6">
                    <div className="row">
                        <h1>City</h1>
                        {displayList(cities)}
                    </div>
                </div>
                <div className="col-lg-4 col-6">
                    <div className="row">
                        <h1>Popular vendors</h1>
                        {displayList(popularVendors)}
                    </div>
                </div>
            </div>
            <div className="row copyright">
                <div className="col-lg-6 col-sm-12 site-title">
                    <span>
                        <FaCopyright />
                    </span>
                    <p>{currentYear} Cloudmall Africa</p>
                </div>
                <div className={`col-lg-6 col-sm-12 icons ${styles.icons}`}>
                    <div className="row">{displayList(SocialIcons)}</div>
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
                }
            `}</style>
        </footer>
    );
};

export default Footer;
