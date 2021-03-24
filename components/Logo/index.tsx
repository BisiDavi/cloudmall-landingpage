import React from "react";
import Image from "next/image";

const Logo = () => (
    <div className="logo">
        <Image src="/logo.svg" height={100} width={100} />
        <h3>cloudmall</h3>
        <style jsx>{`
            .logo {
                display: flex;
                align-items: center;
            }
            h3 {
                color: black;
            }
        `}</style>
    </div>
);

export default Logo;
