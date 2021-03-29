import React from "react";
import Image from "next/image";

const Logo = () => (
    <div className="logo">
        <Image
            src="/Logo-Blue.png"
            alt="Cloudmall Africa logo"
            height={50}
            width={200}            
        />
        <style jsx>{`
            .logo {
                display: flex;
                align-items: center;
            }

            @media (max-width: 500px) {
                .logo {
                    margin-left: -20px;
                }
            }
        `}</style>
    </div>
);

export default Logo;
