import React from "react";
import { isMobile, isIOS, isAndroid, isBrowser } from "react-device-detect";
import { AppstoreButton, PlaystoreButton } from "../Button";

const DownloadBtn = () => {
    const detectOS = () => {
        if (isMobile && isIOS) {
            return <AppstoreButton />;
        } else if (isMobile && isAndroid) {
            return <PlaystoreButton />;
        } else if (isBrowser) {
            return (
                <>
                    <PlaystoreButton />
                    <AppstoreButton />
                </>
            );
        } else {
            return null;
        }
    };
    return (
        <>
            <li className="downloadbtn">{detectOS()}</li>
            <style jsx>{`
                li {
                    list-style: none;
                }
                .downloadbtn {
                    width: fit-content;
                    display: flex;
                    align-content: center;
                    justify-content: space-between;
                }
                @media (max-width: 768px) {
                    section.row .downloadbtn {
                        display: none;
                    }
                    .downloadbtn {
                        width: fit-content;
                    }
                }
                @media (max-width: 480px) {
                    .downloadbtn {
                        justify-content: flex-end;
                        display: flex;
                        flex-direction: row;
                        width: fit-content;
                        margin-right: 8px;
                        margin-top: 10px;
                    }
                }
            `}</style>
        </>
    );
};

export default DownloadBtn;
