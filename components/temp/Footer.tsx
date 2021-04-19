import React from "react";
import footerLinks from "../temp/json/footer.json";
import DownloadBtn from "./DownloadBtn";
import { FaCopyright } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

interface FooterLinkInterface {
    profile: any[];
    clients: {
        title: string;
        links: string[];
    }[];
}

const displayFooterLink = (link) => {
    switch (link.type) {
        case "image":
            return <img className={styles.logo} src={link.icon} />;
        case "button":
            return <DownloadBtn />;
        case "text":
            return (
                <span>
                    <img src={link.icon} />
                    <p>{link.text}</p>
                </span>
            );
        case "link":
            return (
                <span>
                    <img src={link.icon} />
                    <a href={link.text}>{link.text}</a>
                </span>
            );
        case "number":
            return (
                <span>
                    <img src={link.icon} />
                    <a href="tel:+2349054096314">{link.text}</a>
                </span>
            );
        case "email":
            return (
                <span>
                    <img src={link.icon} />
                    <a href={`mailto:${link.text}`}>{link.text}</a>
                </span>
            );
        default:
            return null;
    }
};

const Footer = () => {
    const { profile, clients }: FooterLinkInterface = footerLinks;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className={styles.footer}>
            <div className="row footer-links">
                <div className="profile">
                    {profile.map((link, index) => {
                        return (
                            <div
                                key={index}
                                className={`column column-${index}`}
                            >
                                {displayFooterLink(link)}
                            </div>
                        );
                    })}
                </div>
                <div className="stores">
                    {clients.map((client, index) => (
                        <div key={index} className={`client client-${index}`}>
                            <h4>{client.title}</h4>
                            {client.links.map((clientName, index) => (
                                <p key={index}>{clientName}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="row">
                <h5 className="mx-auto copyright d-flex align-items">
                    Copyright.
                    <span className="mx-1">
                        <FaCopyright />
                    </span>
                    . CloudmallAfrica{" "}
                    <span className="mx-1">{currentYear}</span>
                </h5>
            </div>
            <style jsx>
                {`
                    footer {
                        font-family: "Roboto", sans-serif;
                        font-size: 16px;
                        color: black;
                        padding: 50px 50px 20px 50px;
                    }

                    .stores {
                        display: flex;
                    }

                    .stores .client {
                        margin: 0px 5px;
                        text-align: left;
                    }

                    .profile {
                        width: 20%;
                    }
                    .client h4 {
                        font: normal bold 16px/26px "Roboto";
                    }
                    .client p {
                        font: normal normal 16px/21px "Roboto";
                    }
                    .row.footer-links {
                        margin: 40px auto;
                        align-items: flex-start;
                        justify-content: space-between;
                    }
                    .profile .column span {
                        margin: 30px 0px;
                    }
                    .profile .column span p {
                        margin-bottom: 0px;
                    }
                    .profile .column span {
                        display: flex;
                        align-items: center;
                    }
                    .profile .column.column-1 {
                        margin: 30px 0px 60px 15px;
                    }
                    h5.copyright {
                        font-size: 16px;
                    }
                    h5.copyright.d-flex.align-items span {
                        margin: 0px;
                    }
                    @media (min-width: 1460px) {
                    }
                    @media (max-width: 1440px) and (min-width: 1024px) {
                        footer .stores .client p {
                            font-size: 17px;
                        }
                        footer .stores .client h4 {
                            font-size: 21px;
                        }
                        .stores {
                            width: 70%;
                        }
                    }
                    @media (max-width: 1024px) and (min-width: 768px) {
                        .profile {
                            width: 100%;
                            position: relative;
                            margin-bottom: 40px;
                        }
                        .column {
                            width: 300px;
                        }
                        .profile .column.column-1 {
                            margin: 0px;
                        }
                        .column.column-2 {
                            position: absolute;
                            right: 0px;
                            top: 0px;
                        }
                        .column.column-3 {
                            position: absolute;
                            right: 0px;
                            top: 40px;
                        }
                        .column.column-4 {
                            position: absolute;
                            right: 0;
                            top: 80px;
                        }
                        .column.column-5 {
                            position: absolute;
                            right: 0px;
                            top: 120px;
                        }

                        footer .stores .client p {
                            margin-bottom: 2px;
                        }
                    }
                    @media (max-width: 1024px) {
                        .stores {
                            display: grid;
                            grid-template-columns: repeat(
                                auto-fit,
                                minmax(160px, 1fr)
                            );
                            width: 100%;
                            margin: 20px 0px;
                        }
                    }
                    @media (max-width: 768px) and (min-width: 480px) {
                        footer {
                            margin: 0px 15px;
                            position: relative;
                        }
                        footer .stores .client h4 {
                            font-size: 20px;
                            margin-bottom: 2px;
                        }
                        footer .stores .client p {
                            font-size: 17px;
                            margin-bottom: 2px;
                        }
                    }

                    @media (max-width: 480px) {
                        footer {
                            display: flex;
                            flex-direction: column;
                            padding: 0px 15px;
                        }
                        .profile .column.column-0 img {
                            width: 50%;
                        }

                        .profile .column.column-1 {
                            position: absolute;
                            right: 0px;
                            top: 15px;
                            margin: 0px;
                            width: 160px;
                            padding: 0px;
                        }
                        footer .stores .client h4 {
                            font-size: 18px;
                            margin-bottom: 2px;
                        }

                        footer .stores .client p {
                            font-size: 17px;
                            margin-bottom: 2px;
                        }
                        .profile {
                            width: 100%;
                            position: relative;
                        }
                    }

                    @media (max-width: 340px) {
                        .profile .column.column-1 {
                            margin-top: -15px !important;
                            width: 145px !important;
                        }
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
