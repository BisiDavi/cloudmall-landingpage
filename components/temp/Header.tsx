import React from "react";
import DownloadBtn from "./DownloadBtn";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 header">
                    <img src="/fullLogo.png" />

                    <DownloadBtn />
                </div>
            </div>
            <style jsx>{`
                .col-12.header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid black;
                    padding: 0px 80px;
                    z-index: 100;
                    position: fixed;
                    background: white;
                }
                @media (max-width: 480px) {
                    .col-12.header {
                        padding: 0px 15px;
                        flex-direction: row;
                        padding-bottom: 15px;
                    }
                    .header img {
                        width: 50%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;
