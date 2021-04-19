import React from "react";

const AppstoreButton = () => {
    return (
        <div className="appstore">
            <a
                target="_blank"
                href="https://apps.apple.com/ng/app/cloudmall-africa/id1562494135"
            >
                <img src="/appstore.png" />

                <style jsx>{`
                    @media (max-width: 768px) {
                        img {
                            width: 70%;
                        }
                    }
                    @media (max-width: 480px) {
                        img {
                            width: 80px;
                            margin: 5px;
                        }
                    }
                    @media (max-width: 340px) {
                        img {
                            width: 70px;
                            margin: 5px;
                        }
                    }
                `}</style>
            </a>
        </div>
    );
};

export default AppstoreButton;
