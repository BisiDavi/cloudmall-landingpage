import React from "react";

const Policy = () => {
    return (
        <div className="policy">
            <div className="content">
                <p>
                    By using this website you agree to your
                    <u>cookie policy</u>
                </p>
                <button className="dismiss">Dismiss</button>
            </div>
            <style jsx>
                {`
                    u {
                        margin: 0px 10px;
                    }
                    p {
                        margin: 0px;
                    }
                    .policy {
                        width: 100%;
                        position: fixed;
                        bottom: 30px;
                    }
                    .content {
                        align-items: center;
                        display: flex;
                        justify-content: space-between;
                        padding: 5px 30px;
                        width: 40%;
                        margin: auto;
                        border-radius: 10px;
                        border: 1px solid orange;
                        background-color: white;
                    }
                    button.dismiss {
                        border: none;
                        height: 40px;
                        border-color: #dfe3ff;
                        background-color: #dfe3ff;
                        color: orange;
                        font-size: 0.875rem;
                        border-radius: 5px;
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    );
};

export default Policy;
