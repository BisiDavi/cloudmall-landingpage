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
        `}</style>
    </div>
);

export default Logo;
