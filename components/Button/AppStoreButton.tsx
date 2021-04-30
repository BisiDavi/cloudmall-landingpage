import React from "react";

const AppstoreButton = () => {
    return (
        <a
            className="appstore"
            target="_blank"
            href="https://apps.apple.com/ng/app/cloudmall-africa/id1562494135"
        >
            <img src="/appstore.png" />

            <style jsx>{`
                img {
                    margin: 0px 10px;
                }
                @media (max-width: 768px) {
                    img {
                        width: 70%;
                    }
                }
                @media (max-width: 480px) {
                    img {
                        width: 120px;
                        margin: 5px;
                        height:36px;
                    }
                }
                @media (max-width: 340px) {
                    img {
                        width: 90px;
                        margin: 5px;
                    }
                }
            `}</style>
        </a>
    );
};

export default AppstoreButton;
