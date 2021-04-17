import React from "react";
import { Button } from "react-bootstrap";
import Logo from "../Logo";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 header">
                    <img src="/fullLogo.png" />

                    <Button>Download App Now</Button>
                </div>
            </div>
            <style jsx>{`
                .col-12.header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid black;
                }
            `}</style>
        </div>
    );
};

export default Header;
