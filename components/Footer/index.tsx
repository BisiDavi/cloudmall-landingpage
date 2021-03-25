import React from "react";
import { AppstoreButton, PlaystoreButton } from "../Button";
import Logo from "../Logo";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const cities = ["Lagos", "Ile-Ife"];
    const popularVendors = ["Banwil", "Ace", "Nissi Foods"];
    const displayList = (listArr) => (
        <ul>
            {listArr.map((list) => (
                <li key={list}>{list}</li>
            ))}
        </ul>
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <Logo />
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
                    <h1>Popular popularVendors</h1>
                    {displayList(popularVendors)}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <p>{currentYear} Cloudmall Africa</p>
                </div>
                <div className="col-lg-6 col-xs-12 icons"></div>
            </div>
        </div>
    );
};

export default Footer;
