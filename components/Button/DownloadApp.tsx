import React from "react";

const DownloadApp = () => {
    return (
        <a target="_blank" href={process.env.NEXT_PUBLIC_GOOGLE_LINK}>
            <button>Download App</button>
            <style jsx>
                {`
                    a {
                        text-decoration: none;
                    }
                    button {
                        background-color: orange;
                        border-radius: 10px;
                        color: white;
                        font-weight: bold;
                        padding: 5px 10px;
                        cursor: pointer;
                        border: none;
                        margin-top: 0px;
                    }
                `}
            </style>
        </a>
    );
};

export default DownloadApp;
