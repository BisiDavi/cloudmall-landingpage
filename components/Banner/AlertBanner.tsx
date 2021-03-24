import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const AlertBanner = () => {
    return (
        <div className="alertbanner">
            <h1>
                Need help placing an order?
                <span>
                    <FiPhoneCall />
                </span>
                Call: +234 703 165 3411
            </h1>
            <style jsx>
                {`
                    .alertbanner {
                        background-color: #f29100;
                        height: 50px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: auto;
                    }
                    h1 {
                        color: white;
                        text-align: center;
                        font-size: 20px;
                        font-weight: bold;
                        margin: 0px;
                        padding: 0px;
                    }
                    span {
                        margin: 0px 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default AlertBanner;
