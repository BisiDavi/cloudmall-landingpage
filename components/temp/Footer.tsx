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
            <div className="copyright-row">
                <h5 className="mx-auto copyright d-flex align-items">
                    Copyright.
                    <span className="mx-1">
                        <FaCopyright />
                    </span>
                    <span>CloudmallAfrica </span>
                    <span className="mx-1">{currentYear}</span>
                </h5>
            </div>
            <style jsx>
                {`
                    footer {
                        padding: 50px 80px 15px;
                    }
                    footer .row {
                        display: grid;
                        grid-template-columns: 2fr 10fr;
                        grid-gap: 50px;
                    }
                    h4 {
                        font-weight: bold;
                    }
                    h4,
                    p {
                        font-size: 16px;
                        font-family: "Roboto", sans-serif;
                    }
                    footer .stores {
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        grid-template-rows: repeat(15, 10px);
                        grid-row-gap: 20px;
                        grid-column-gap: 10px;
                    }
                    .client.client-0 {
                        grid-column: 1;
                        grid-row: 1/16;
                    }

                    .client.client-1 {
                        grid-column: 2;
                        grid-row: 1/8;
                    }

                    .client.client-2 {
                        grid-column: 3;
                        grid-row: 1/9;
                    }
                    .client.client-3 {
                        grid-column: 4;
                        grid-row: 1/5;
                    }
                    .client.client-4 {
                        grid-column: 4;
                        grid-row: 5/9;
                    }
                    .client.client-5 {
                        grid-column: 5;
                        grid-row: 1/5;
                    }
                    .client.client-6 {
                        grid-column: 5;
                        grid-row: 5/8;
                    }
                    .client.client-7 {
                        grid-column: 5;
                        grid-row: 8/11;
                    }
                    .copyright-row h5 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 80px auto 0px auto;
                    }

                    @media (max-width: 1024px) and (min-width: 768px) {
                        h4,
                        p {
                            font-size: 14px;
                        }
                    }

                    @media (max-width: 768px) and (min-width: 500x) {
                        footer .row {
                            grid-template-rows: 1fr 1fr;
                        }
                    }

                    @media (max-width: 768px) {
                        footer {
                            padding: 40px;
                        }
                        footer .row {
                            grid-template-columns: 1fr;
                        }
                    }

                    @media (max-width: 550px) {
                        footer .row {
                            grid-template-columns: 1fr;
                            grid-template-rows: 1fr 2fr;
                        }

                        footer .stores {
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-rows: repeat(22, 10px);
                            grid-row-gap: 20px;
                            grid-column-gap: 10px;
                        }
                        .client.client-0 {
                            grid-column: 1;
                            grid-row: 1/16;
                        }
                        .client.client-1 {
                            grid-column: 2;
                            grid-row: 1/7;
                        }
                        .client.client-2 {
                            grid-column: 2;
                            grid-row: 7/15;
                        }
                        .client.client-3 {
                            grid-column: 1;
                            grid-row: 15/19;
                        }
                        .client.client-4 {
                            grid-column: 1;
                            grid-row: 19/23;
                        }
                        .client.client-5 {
                            grid-column: 2;
                            grid-row: 14/19;
                            padding-top: 10px;
                        }
                        .client.client-6 {
                            padding-top: 10px;
                            grid-column: 2;
                            grid-row: 18/21;
                        }

                        .client.client-7 {
                            grid-column: 2;
                            grid-row: 20/23;
                            padding-top: 10px;
                        }
                        @media (max-width: 600px) {
                            h4,
                            p,
                            h5 {
                                font-size: 14px;
                            }
                        }
                        @media (max-width: 350px) {
                            p {
                                font-size: 14px;
                            }
                        }
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
