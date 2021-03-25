import React, { useState } from "react";

const Policy = () => {
    const [policy, setPolicy] = useState(true);
    const hidePolicy = () => setPolicy(false);
    return policy ? (
        <div className="policy">
            <div className="content">
                <p>
                    By using this website you agree to your
                    <u>cookie policy</u>
                </p>
                <button onClick={hidePolicy} className="dismiss">
                    Dismiss
                </button>
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
                        z-index: 1000;
                    }
                    button:hover {
                        opacity: 0.6;
                    }
                    .content {
                        align-items: center;
                        display: flex;
                        justify-content: space-between;
                        padding: 5px 30px;
                        width: 30%;
                        box-shadow: 0 0 25px rgba(0, 0, 0, 0.06);
                        margin: auto;
                        border-radius: 10px;
                        border: 1px solid orange;
                        background-color: white;
                    }
                    button.dismiss {
                        border: none;
                        height: 40px;
                        border-color: #dfe3ff;
                        background-color: orange;
                        color: white;
                        font-size: 0.875rem;
                        border-radius: 5px;
                        font-weight: bold;
                    }
                `}
            </style>
        </div>
    ) : null;
};

export default Policy;
