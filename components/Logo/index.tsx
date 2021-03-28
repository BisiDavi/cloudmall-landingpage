import React from "react";
import Image from "next/image";

const Logo = () => (
    <div className="logo">
        <Image src="/main_logo.png" height={80} width={80} />
        <h3>cloudmall</h3>
        <style jsx>{`
            .logo {
                display: flex;
                align-items: center;
            }
            h3 {
                margin: 0px;
                color: black;
            }
            @media (max-width: 500px) {
                .logo {
                    margin-left: -20px;
                }
                .logo h3 {
                    font-size: 20px;
                    margin-left: -20px;
                    font-weight: bold;
                }
            }
        `}</style>
    </div>
);

export default Logo;
