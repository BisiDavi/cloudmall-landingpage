import React, { useEffect } from "react";
import { isMobile, isIOS, isAndroid } from "react-device-detect";
import { AppstoreButton, PlaystoreButton } from "../Button";

const DownloadBtn = () => {
    const detectOS = () => {
        return isMobile && isIOS ? (
            <AppstoreButton />
        ) : isMobile && isAndroid ? (
            <PlaystoreButton />
        ) : (
            <>
                <AppstoreButton />
                <PlaystoreButton />
            </>
        );
    };
    return (
        <>
            <span>{detectOS()}</span>
            <style jsx>{`
                span {
                    width: 300px;
                    display: flex;
                    align-content: center;
                    justify-content: space-between;
                }
                @media (max-width: 768px) {
                    section.row span {
                        display: none;
                    }
                }
                @media (max-width: 480px) {
                    span {
                        justify-content: flex-end;
                        display: flex;
                        flex-direction: row;
                        width: 185px;
                        margin-right: 8px;
                        margin-top: 10px;
                    }
                }
            `}</style>
        </>
    );
};

export default DownloadBtn;
