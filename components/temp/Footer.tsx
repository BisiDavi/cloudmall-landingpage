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
                    . CloudmallNG <span className="mx-1">{currentYear}</span>
                </h5>
            </div>
            <style jsx>
                {`
                    footer {
                        font-family: "Roboto", sans-serif;
                        font-size: 16px;
                        color: black;
                    }

                    .profile {
                        width: 20%;
                    }
                    .client h4 {
                        font: normal bold 25px/28px "Roboto";
                    }
                    .client p {
                        font: normal normal 24px/28px "Roboto";
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
                    @media (min-width: 768px) {
                        .stores {
                            display: grid;
                            width: 70%;
                            grid-gap: 20px;
                            grid-template-rows: repeat(4, 130px);
                            grid-template-columns: repeat(
                                auto-fit,
                                minmax(200px, 1fr)
                            );
                        }

                        .client.client-0 {
                            grid-column: 1;
                            grid-row: 1/5;
                        }

                        .client.client-1 {
                            grid-column: 2;
                            grid-row: 1/3;
                        }

                        .client.client-6 {
                            grid-area: 2/5;
                        }

                        .client.client-5 {
                            grid-area: 1/5;
                        }

                        .client.client-4 {
                            grid-area: 2/4;
                        }

                        .client.client-7 {
                            grid-area: 3/5;
                        }
                    }
                    @media (max-width: 768px) {
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
                        }
                        .profile .column.column-1 {
                            position: absolute;
                            right: 0px;
                            top: 45px;
                            margin: 0px;
                            width: 50%;
                            padding: 0px;
                        }
                        .stores {
                            width: 100%;
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-rows: repeat(14, 30px);
                            grid-gap: 10px;
                            margin-top: 20px;
                        }
                        .profile {
                            width: 100%;
                        }
                        .client.client-0 {
                            grid-column: 1;
                            grid-row: 1/9;
                        }
                        .client.client-1 {
                            grid-column: 2;
                            grid-row: 1/5;
                        }
                        .client.client-2 {
                            grid-row: 5/9;
                            margin-top: 5px;
                        }
                        .client.client-3 {
                            grid-column: 1;
                            grid-row: 9/13;
                            margin-top: 10px;
                        }
                        .client.client-4 {
                            grid-column: 1;
                            grid-row: 12/14;
                            margin-top: 5px;
                        }
                        .client.client-5 {
                            grid-row: 10/12;
                        }
                        .client.client-6 {
                            grid-row: 12/14;
                            margin-top: 10px;
                        }
                        .client.client-7 {
                            grid-column: 2;
                            margin-top: -10px;
                            grid-row: 14/16;
                        }
                    }
                    @media (max-width: 380px) {
                        .client.client-7 {
                            grid-column: 2;
                            margin-top: -20px;
                            grid-row: 15/16;
                        }
                        .client.client-6 {
                            grid-row: 13/15;
                            grid-column: 2;
                            margin-top: 0px;
                        }
                    }
                    @media (max-width: 340px) {
                        .client.client-0 {
                            grid-column: 1;
                            grid-row: 1/9;
                        }
                        .client.client-1 {
                            grid-column: 2;
                            grid-row: 1/5;
                        }
                        .client.client-2 {
                            grid-column: 2;
                            grid-row: 6/10;
                            margin-top: -15px;
                        }
                        .client.client-3 {
                            grid-column: 1;
                            grid-row: 9/13;
                            margin-top: 10px;
                        }
                        .client.client-4 {
                            grid-column: 1;
                            grid-row: 12/14;
                            margin-top: 5px;
                        }
                        .client.client-5 {
                            grid-row: 11/15;
                            grid-column: 2;
                            margin-top: -20px;
                        }
                        .client.client-6 {
                            grid-column: 2;
                            grid-row: 14/16;
                            margin-top: -10px;
                        }
                        .client.client-7 {
                            grid-column: 1;
                            grid-row: 14/17;
                            margin-top: 10px;
                        }
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
