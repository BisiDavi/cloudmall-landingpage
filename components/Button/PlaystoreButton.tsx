import React from "react";

const PlaystoreButton = () => {
    return (
        <div className="playstore">
            <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.cloudmallng.cloudmall_africa"
            >
                <img src="/playstore.png" />
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

export default PlaystoreButton;
