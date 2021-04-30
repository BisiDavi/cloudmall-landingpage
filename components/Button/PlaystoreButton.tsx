import React from "react";

const PlaystoreButton = () => {
    return (
        <a
            className="playstore"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.cloudmallng.cloudmall_africa"
        >
            <img src="/playstore.png" />
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
                        height: 36px;
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
    );
};

export default PlaystoreButton;
