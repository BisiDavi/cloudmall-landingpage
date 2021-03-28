import React from "react";

const DownloadApp = () => {
    return (
        <a target="_blank" href={process.env.NEXT_PUBLIC_GOOGLE_LINK}>
            <button>Download App here</button>
            <style jsx>
                {`
                    a {
                        text-decoration: none;
                    }
                    button {
                        background-color: orange;
                        border-radius: 10px;
                        color: white;
                        font-weight: normal;
                        padding: 5px 10px;
                        cursor: pointer;
                        width: 170px;
                        height: 40px;
                        border: none;
                        margin-top: 0px;
                    }
                    button:hover {
                        background-color: #db8300;
                    }
                `}
            </style>
        </a>
    );
};

export default DownloadApp;
